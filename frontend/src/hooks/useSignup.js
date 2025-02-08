import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

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
        body: JSON.stringify({ fullName, username, password, confirmPassword }),
      });
      const data = await res.json();
      console.log(data);
      toast.success("Signup successful!");
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
