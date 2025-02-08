import express from "express";
import { login, logout, signup, getUsers } from "../controllers/userController.js";
 import protectedRoute from "../middleware/protectedRoute.js";

const userRoutes=express.Router();
userRoutes.post('/signup', signup);
userRoutes.post('/login', login);
userRoutes.post('/logout', logout);
userRoutes.get('/users',protectedRoute,getUsers);

export default userRoutes