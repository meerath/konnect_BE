const { JsonWebTokenError } = require("jsonwebtoken");

const jwt= require('jsonwebtoken');
generateToken=({id})=>{
return jwt.sign({id}, process.env.JWT_SECRET,{
    expiresIn:"30d"
});
};
module.exports=generateToken;