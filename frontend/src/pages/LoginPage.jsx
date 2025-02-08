import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import {Link} from "react-router-dom"
const LoginPage = () => {
  const { loading, login } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    await login(username, password);
  };

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-blue-500">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
        
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Enter your username"
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

     
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

       
          <div className="flex justify-between text-sm">
           
            <Link to="/signup" className="text-blue-600 hover:underline">
              Don't have an account?
            </Link>
          </div>


          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
