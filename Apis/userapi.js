// to extract request body
const exp = require("express");
const userApp = exp.Router() ;
const expressAsyncHandler = require('express-async-handler') ;
// importing bcryptjs for passsword hashing
const bcryptjs = require('bcryptjs');
// importing jsonWebToken to create token 
const jwt = require('jsonwebtoken');
require('dotenv').config();
//body extract of request middleware


var cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require('multer');

// configure cloudinary 
cloudinary.config({
    cloud_name: "dlxmyojqf",
    api_key: "727489239797667",
    api_secret: "MD3MtSRwWQ1QBukcOv04CNfviKU",
    secure: true,
});

// config cloudinary storage 
const cloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        return {
            folder: "snoops",
            public_id: file.fieldname + "-" + Date.now(),
        };

    },
});

// Configure the multer
var upload = multer({ storage: cloudinaryStorage });

userApp.use(exp.json());
//getuser from db
userApp.get("/getusers", expressAsyncHandler(async (request, response) => {
    let userCollectionObject = request.app.get("userCollectionObject");
    let usersDb = await userCollectionObject.find().toArray();

    if (usersDb === null) {
        response.send({ message: `The users collection is empty` })
    }
    else {
        response.send({ message: "The users from usercollection are", payload: usersDb });
    }
}));


// Create new user route
// creating user using real api request
userApp.post(
    "/create-user",
    expressAsyncHandler(async(request, response) => {
        //get usercollection object
        let userCollectionObject = request.app.get("userCollectionObject");
        // console.log(userCollectionObject) ;
        // console.log(request.body) ;
        let newuserObj = request.body;
       

        let userObjdb = await userCollectionObject.findOne({ username: newuserObj.username, });
        if (userObjdb !== null) {
            response.send({ message: `The username already exits in the db pls chooose some other username` }) ;         
        }
        else {
            let hashPassword = await bcryptjs.hash(newuserObj.password, 5);
            // replace the request body password with hashed password
            newuserObj.password = hashPassword;
            // add porfile image to newUser
            // newuserObj.profileImg=request.file.path ;
            // delete newuserObj.image;
            // insert the newuser to db
            await userCollectionObject.insertOne(newuserObj);
            response.send({ message: "The new user object succesfully inserted in to db" }) ;
           
        }

    }));


// userApi's
// Route to handle get user by id 

// get user by id from db
userApp.get('/getuser/:name', expressAsyncHandler(async (request, response) => {
    let userCollectionObject = request.app.get("userCollectionObject");
    let newuserName = request.params.name;
    let usernameDb = await userCollectionObject.findOne({ username: { $eq: newuserName } })
    if (usernameDb === null) {
        response.send({ message: `The username provided doesn't exits in the DB` })
    }
    else {
        response.send({ message: `The user with username : ${newuserName} is `, payload: usernameDb })
    }

}));

// create route to user login 
userApp.post(
    '/login',
    expressAsyncHandler(async (request, response) => {
        // get collection from db
        let userCollectionObject = request.app.get("userCollectionObject");
        // console.log(userCollectionObject) ;
        // get user credentials from client
        let Clientusername = request.body ;

        // console.log(Clientusername)
        let Dbusername = await userCollectionObject.findOne({ username: Clientusername.username }) 
        // checking for usename match
        // console.log(Dbusername) ;
        if (Dbusername === null) {
            //    response.send({message:`The user with username ${Clientusername.username} not exits in DB`});
            response.send({ message: "Invalid user" })
        }
        else {
            let Dbuserpass = await bcryptjs.compare(Clientusername.password, Dbusername.password);

            //checking for password matching 
            if (Dbuserpass === false) {
                //    response.send({message:`The password entered for the username ${Clientusername.username} is incorret`})
                response.send({ message: 'Invalid password' });
            }
            else {
                //   create token
                const key = process.env.SECRET_KEY;
                let token = jwt.sign({ username: Dbusername.username }, key, { expiresIn: "1h" }) ;
                response.send({ message: "success", payload: token, userObj: Dbusername }) ;
            }
        }
    })) ;


// update user
userApp.put('/update-user', expressAsyncHandler(async (request, response) => {
    let userCollectionObject = request.app.get("userCollectionObject");
    // get userObj from client and convert it in to a object
    let modifiedObj = request.body;
    let Dbuser = await userCollectionObject.findOne({ username: modifiedObj.username })
    if (Dbuser === null) {
        response.send({ message: "User not found in the Database" })
    }
    else {
        await userCollectionObject.updateOne({ username: modifiedObj.username }, { $set: { ...modifiedObj } })
        response.send({ messsage: "The user details updated succesfully" })
    }


}))

// delete user by id
userApp.delete('/remove-user/:name', expressAsyncHandler(async (request, response) => {
    let userCollectionObject = request.app.get("userCollectionObject")
    let Delusername = (request.params.name)
    await userCollectionObject.deleteOne({ username: Delusername })
    response.send({ message: 'The user details succesfully deleted from DB' })
}))


// exporting user api
module.exports = userApp;