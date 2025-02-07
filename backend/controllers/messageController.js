import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;
    let convo = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!convo) {
      convo = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      convo.messages.push(newMessage._id);
    }
    await convo.save();
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const convo = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    console.log("convo======>", convo);

    if (!convo) {
      return res.status(200).json([]);
    }
    res.status(200).json(convo.messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { sendMessage, getMessage };
