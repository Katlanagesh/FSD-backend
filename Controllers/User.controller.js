const AuthRouter= require("express").Router();
const UserModel = require("../Model/User.model")
const UserSchema = require("../Model/User.model")
// method : GET
//Path : getAllUsers
AuthRouter.get('/getAllUsers', function(req, res, next){
    const users = UserSchema.find({}).then();
     console.log(users);
    res.status(200).json({
        message : 'fetched users'
    })
})


// method : POST
//Path : createUser
AuthRouter.post('/createUser', function(req, res, next){
    res.status(200).json({
        message : 'fetched users'
    })
})
module.exports = AuthRouter;