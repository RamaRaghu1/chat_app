import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./db/db.js";
import messageRoutes from "./routes/messageRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";

dotenv.config();
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.get("/test", (req, res) => {
  res.send("test");
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/messages", messageRoutes);
server.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
