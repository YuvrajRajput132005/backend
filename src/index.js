import dotenv from "dotenv";
/*import mongoose from "mongoose";
import { DB_NAME } from "./constants";*/
dotenv.config();
import connectDB from "./db/connectDB.js";



console.log("Backend started");

connectDB();
























































































/*import express from "express";
const app = express()
( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR:",error);
        throw error
    }
})*/