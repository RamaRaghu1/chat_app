
import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin:'*',
		methods: ["GET", "POST"],
	},
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap = {}; 
const userNameMap = {}; 

io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;
    const username = socket.handshake.query.username;
	if (userId != "undefined"){ userSocketMap[userId] = socket.id;
    userNameMap[userId] = username;}

	
	io.emit("getOnlineUsers", Object.keys(userSocketMap).map((id) => ({
        userId: id,
        username: userNameMap[id],
    })));

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
        delete userSocketMap[userId];
        delete userNameMap[userId];

        io.emit("getOnlineUsers", Object.keys(userSocketMap).map((id) => ({
            userId: id,
            username: userNameMap[id] || "Unknown User",
        })));
    });
});

export { app, io, server };

