const express = require("express");
const UserModel= require("../models/userModel")
const expressAsyncHandler = require("express-async-handler")
const loginController=()=>{

}
const registerController=  expressAsyncHandler(async (req, res)=>{
const {name, email, password}=req.body;
if(!name || !email || !password){
    res.send(404)
    throw Error("all inputs are necesary ")
}
const userExist= await UserModel.findOne({email})
if(userExist){
    throw new Error("user already exists")
}

//user name alredy taken
const userNmeExist= await UserModel.findOne({name})
if(userNmeExist){
    throw new Error("userName already exists")
}

//create entry in DB 
const user=await UserModel.create({ name ,email, password });
});