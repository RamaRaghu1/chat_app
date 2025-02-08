import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
const {setAuthUser}=useAuthContext();
  const login = async (username, password) => {

    const success = handleInputError(
        username,
        password
      );
      if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      } else {
        toast.success("login successful");
        localStorage.setItem('user',JSON.stringify(data))
        setAuthUser(data)
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading, login}
};
export default  useLogin;

function handleInputError( username, password ) {
    if (!username || !password ) {
      toast.error("fill all the fields");
      return false;
    }
  
   
    return true;
  }