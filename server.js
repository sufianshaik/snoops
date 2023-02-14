const exp = require('express');
const app = exp();
const mclient = require("mongodb").MongoClient;
// const expressAsyncHandler = require('express-async-handler')


require('dotenv').config()

const path = require('path')
app.use(exp.static(path.join(__dirname, './build')))


const Dburl = process.env.DATABASE_CONNECTION_URL;

mclient.connect(Dburl)
  .then((client) => {
    let dbobj = client.db("snoops1");
    let userCollectionObject = dbobj.collection("usercollection");
    let productListObject = dbobj.collection("productListObject");
    app.set("userCollectionObject", userCollectionObject);
    app.set("productListObject",productListObject);
    console.log("DB connection succesfull");
  })
  .catch(err => console.log("Error in connecting DB", err));

const userApp = require('./Apis/userapi');
const prodList = require('./Apis/productlistapi');

app.use('/user-api', userApp);
app.use('/productlist-api',prodList);

// app.post("/createuser",
//     expressAsyncHandler(async(request,response)=>{
//     //get usercollection object
//     console.log(request.body);
    
//     let userCollectionObject=request.app.get("userCollectionObject");
//     let newuserObj=request.body.userObj;
//     let userObjdb=await userCollectionObject.findOne({username:newuserObj.username})
//     if (userObjdb==null){
//         // hash password
//         let hashPassword=await bcryptjs.hash(newuserObj.password,5);
//         // replace the request body password with hashed password
//         newuserObj.password=hashPassword;
//         // add porfile image to newUser
//         // newuserObj.profileImg=request.file.path ;
//         // delete newuserObj.image;
//         // insert the newuser to db
//         await userCollectionObject.insertOne(newuserObj)
//         response.send({message:`The new user object succesfully inserted in to db`})

//     }
//     else{
//         response.send({message:`The username already exits in the db pls chooose some other username`})
//     }
    
// }));


app.use('/*', (request, response) => {
  response.sendFile(path.join(__dirname, './build/index.html'))
})

app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid ` })
})

app.use((error, request, response, next) => {
  response.send({ message: `Error occured at ${request.url}`, reason: `${error.message} in ${request.url}` })
})

const port = process.env.port
app.listen(port, () => console.log(`Web server listening on port ${port}...`));