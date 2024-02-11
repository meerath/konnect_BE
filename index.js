const express= require("express");
const dotenv= require("dotenv");
const { default: mongoose } = require("mongoose");
const app= express();
dotenv.config();
const userRoutes= require("./Routes/userRoutes");
const port= process.env.PORT||6000  
const connectDB=async ()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGO_URL);
        console.log("server is connected...")
    }
     catch(err){
    console.log("not connected to database");
}
}
connectDB();
app.get("/",(req, res)=>{
    res.send("yes its working ")
})
app.use("user/", userRoutes);
app.listen(port, console.log("server is running"))