import React,{useState} from 'react'
import { FaMessage } from "react-icons/fa6";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
const Sidebar = () => {
    const [selectedContact, setSelectedContact] = useState(1);
    const contacts= [
        { id: 1, name: 'rama', lastMessage: 'Hi', time: '12:30 PM', unread: 2 },
      
      ];
    

  return (
 
         <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
     
            <h1 className="text-xl font-semibold">Chats</h1>
          </div>
          <FaMessage className="h-6 w-6 text-gray-600" />
        </div>
        
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {contacts.map(contact => (
            <div
              key={contact.id}
              onClick={() => setSelectedContact(contact.id)}
              className={`p-4 cursor-pointer hover:bg-gray-50 ${
                selectedContact === contact.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FaRegUserCircle className="h-12 w-12 text-gray-400" />
                  <div>
                    <h3 className="font-medium">{contact.name}</h3>
                    <p className="text-sm text-gray-500">{contact.lastMessage}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">{contact.time}</p>
                  {contact.unread > 0 && (
                    <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 mt-1 inline-block">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


  )
}

export default Sidebar
