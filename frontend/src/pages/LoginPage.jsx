import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

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
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Enter username"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full input input-bordered h-10"
              />
            </div>
            <a
              href="#"
              className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              {"Don't"} have an account?
            </a>

            <div>
              <button className="btn btn-block btn-sm mt-2">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
