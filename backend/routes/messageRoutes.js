import express from "express";
import protectedRoute from "../middleware/protectedRoute.js"
import { sendMessage, getMessage } from "../controllers/messageController.js";
const messageRoutes=express.Router();
messageRoutes.post("/send/:id", protectedRoute,sendMessage);
messageRoutes.get("/:id", protectedRoute,getMessage);

export default messageRoutes;