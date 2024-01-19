import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/user/authRoutes";

const app = express();

app.listen(3000,()=>{
    console.log("running");
});

try{
    mongoose.connect('mongodb://localhost:27017/freelancing_app_db');
    console.log('DB connected');
}catch(err){
    console.error(err);
}

app.use('/',authRoutes);