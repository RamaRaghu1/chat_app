import { useEffect } from "react";
import { useConversation } from "../context/ConversationContext";
import { useSocketContext } from "../context/SocketContext";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { setMessages } = useConversation(); 

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket?.on("newMessage", handleNewMessage);

    return () => socket?.off("newMessage", handleNewMessage);
  }, [socket, setMessages]); 

};

export default useListenMessages;
