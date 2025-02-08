import React,{useEffect, useState} from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useConversation } from '../context/ConversationContext';
import useSendMessage from '../hooks/useSendMessage';
import useGetMessages from '../hooks/useGetMessage';
import { useAuthContext } from '../context/AuthContext';
const Chat = () => {
  const { authUser } = useAuthContext();
  console.log(authUser._id, "iggg")
  const[message, setMessage]=useState("");
   const {loading, sendMessage}=useSendMessage();
   const{loading:messageLoading, messages}=useGetMessages();
const {selectedConversation, setSelectedConversation}=useConversation();
useEffect(()=>{
  return ()=>setSelectedConversation(null)
},[setSelectedConversation])
  console.log(messages)
    
      const handleSend = async(e) => {
        e.preventDefault();
        if(!message)return;
       await sendMessage(message);
       setMessage("")
      };
    
  return (
    
          <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
          <div className="flex items-center space-x-3">
            <FaRegUserCircle className="h-10 w-10 text-gray-400" />
            <div>
              <h2 className="font-medium">{selectedConversation?.fullName}</h2>
              {/* <p className="text-sm text-gray-500">Online</p> */}
            </div>
          </div>
          
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {!messageLoading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
      {messages && messages?.map((msg) => {
        const fromMe = msg?.senderId === authUser?._id;
        return (
          <div key={msg._id} className={`flex ${fromMe ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] rounded-lg p-3 ${fromMe ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <p>{msg.message}</p>
              <p className={`text-xs mt-1 ${fromMe ? 'text-blue-100' : 'text-gray-500'}`}>{msg.timestamp}</p>
            </div>
          </div>
        );
      })}
    </div>

        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <IoIosSend className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>


  )
}

export default Chat
