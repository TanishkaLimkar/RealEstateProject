import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//MONGO is your DATABASE URL saved in .env file
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB!");
}).catch((err)=>{
    console.log(err);
})

const app = express();

app.listen(3000, ()=> {
    console.log('Server Running on port 3000!! for push purpose');
});