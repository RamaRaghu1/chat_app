import { createBrowserRouter } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";



function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={authUser ? <HomePage /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <LoginPage />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignupPage />} />
			</Routes>
			
		</div>
	);
}

export default App;
