import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser}=useAuthContext();


  const signup = async ({ fullName, username, password, confirmPassword }) => {
    const success = handleInputError({
      fullName,
      username,
      password,
      confirmPassword,
    });
    if (!success) return;

    try {
      const res = await fetch("http://localhost:5000/api/v1/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ fullName, username, password, confirmPassword }),
      });
      const data = await res.json();
      console.log(data);
      if (data?.error) {
    
			throw new Error(data.error);
     
			}else{
        toast.success("User registered successfully")
        
      }

      localStorage.setItem('user',JSON.stringify(data))
      setAuthUser(data)
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    

    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputError({ fullName, username, password, confirmPassword }) {
  if (!fullName || !username || !password || !confirmPassword) {
    toast.error("fill all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords doesn't match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters");
    return false;
  }
  return true;
}
