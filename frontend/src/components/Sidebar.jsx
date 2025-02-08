import React,{useState} from 'react'
import { FaMessage } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import useLogout from '../hooks/useLogout';
import useGetConvo from '../hooks/useGetConvo';
import { useConversation } from '../context/ConversationContext';
const Sidebar = () => {
const {logout, loading}=useLogout();
const {loading:convoLoading, conversations:contacts}=useGetConvo();
const {selectedConversation, setSelectedConversation}=useConversation();

console.log(selectedConversation)

    // const [selectedContact, setSelectedContact] = useState(1);
   
    
    // const isSelected = selectedConversation?._id === contacts._id;
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
              onClick={() => setSelectedConversation(contact)}
              className={`p-4 cursor-pointer hover:bg-gray-50 ${
                selectedConversation === contact._id ? 'bg-blue-100' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FaRegUserCircle className="h-12 w-12 text-gray-400" />
                  <div>
                    <h3 className="font-medium">{contact.fullName}</h3>
                    {/* <p className="text-sm text-gray-500">{contact.lastMessage}</p> */}
                  </div>
                </div>
                {/* <div className="text-right">
                  <p className="text-xs text-gray-500">{contact.time}</p>
                  {contact.unread > 0 && (
                    <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 mt-1 inline-block">
                      {contact.unread}
                    </span>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>


        <div className="p-4 border-t border-gray-200">
        <button
          onClick={logout}
          className='cursor-pointer p-2 rounded-full hover:bg-gray-100'
        >
         <MdLogout size={25}/>
        </button>
      </div>
      </div>


  )
}

export default Sidebar
