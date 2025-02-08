import React,{useState} from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Chat = () => {
    const [message, setMessage] = useState('');


    const messages= [
        { id: 1, text: 'Hi there!', sent: false, timestamp: '12:00 PM' },
     
      ];
    
      const handleSend = () => {
        if (message.trim()) {
         
          setMessage('');
        }
      };
    
  return (
    
          <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
          <div className="flex items-center space-x-3">
            <FaRegUserCircle className="h-10 w-10 text-gray-400" />
            <div>
              <h2 className="font-medium">Rama</h2>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>
          
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  msg.sent
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${
                  msg.sent ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
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
