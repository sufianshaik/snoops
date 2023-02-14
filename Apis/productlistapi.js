const exp = require("express") ;
const prodList = exp.Router();
const expressAsyncHandler = require('express-async-handler');

const jwt = require('jsonwebtoken');
require('dotenv').config();


prodList.use(exp.json());


prodList.get("/getusers", expressAsyncHandler(async (request, response) => {
    let productListObject = request.app.get("productListObject");
    let usersDb = await productListObject.find().toArray();

    if (usersDb === null) {
        response.send({ message: `The users collection is empty` })
    }
    else {
        response.send({ message: "The users from usercollection are", payload: usersDb });
    }
}));


prodList.post(
    "/create-user",
    expressAsyncHandler(async(request, response) => {

        let productListObject = request.app.get("productListObject");
        let newuserObj = request.body;
       

        let userObjdb = await productListObject.findOne({ username: newuserObj.username, });
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




module.exports = prodList ;