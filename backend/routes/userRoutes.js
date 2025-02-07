import express from "express";


const userRoutes=express.Router();
userRoutes.get('/signup');
userRoutes.get('/login');
userRoutes.get('/logout');

export default userRoutes