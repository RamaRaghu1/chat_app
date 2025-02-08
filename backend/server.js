import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./db/db.js";
import messageRoutes from "./routes/messageRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";



const app=express();
dotenv.config();
app.use(cors('*'))
const PORT=process.env.PORT||5000
app.use(express.json());
app.get('/test',(req,res)=>{
    res.send("test")
})

app.use(cookieParser())
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/messages', messageRoutes);
app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server running on port ${PORT}`)});
