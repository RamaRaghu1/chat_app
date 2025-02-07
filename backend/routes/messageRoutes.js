import express from "express";
import protectdRoute from "../middleware/protectedRoute.js";
import { sendMessage, getMessage } from "../controllers/messageController.js";
const messageRoutes=express.Router();
messageRoutes.post("/send/:id", protectdRoute,sendMessage);
messageRoutes.get("/:id", protectdRoute,getMessage);

export default messageRoutes;