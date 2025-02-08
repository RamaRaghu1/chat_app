import { useAuthContext } from "../context/AuthContext";
import React from "react";

export const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-600 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome {authUser.fullName}.</p>
				<p>Select a chat to start messaging</p>
		
			</div>
		</div>
	);
};