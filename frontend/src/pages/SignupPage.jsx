import React, { useState } from 'react'
import {Link} from "react-router-dom";
import useSignup from '../hooks/useSignup';
const SignupPage = () => {
	const [inputs, setInputs]=useState({
		fullName:'',
		username:'',
		password:'',
		confirmPassword:''
	})
	const {loading, signup}=useSignup();

	const handleSubmit=async(e)=>{
e.preventDefault();
console.log(inputs)
await signup(inputs);

	}
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
 				<h1 className='text-3xl font-semibold text-center text-blue-500'>
 					Sign Up 
 				</h1>

 				<form onSubmit={handleSubmit} className="space-y-4">
        
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

 
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

        
          <div className="flex  text-sm">
            <Link to="/login" className="text-blue-600 hover:underline ">
              Already have an account?
            </Link>
          </div>


          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
 			</div>
 		</div>

    </div>
  )
}

export default SignupPage
