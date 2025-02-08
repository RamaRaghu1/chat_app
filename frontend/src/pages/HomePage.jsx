import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'
const HomePage = () => {
  return (
    <div className=' h-full  w-screen flex '>
      <Sidebar/>
    <Chat/>
    </div>
  )
}

export default HomePage
