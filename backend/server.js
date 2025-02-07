import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

const app=express();
const PORT=process.env.PORT||5000

app.get('/',(req,res)=>{
    res.send("Hello world")
})


app.use('/api/v1/user', userRoutes);
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))
