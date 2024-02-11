const express= require("express")
const Router=express.Router();
Router.post('/login', loginController);
Router.post('/login', registerController);

module.exports=Router;