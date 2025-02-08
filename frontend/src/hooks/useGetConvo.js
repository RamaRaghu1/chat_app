import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConvo= () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConvos = async () => {
			setLoading(true);
			try {
				const res = await fetch("http://localhost:5000/api/v1/user/users",{
                    method: "GET",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                });
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setConversations(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConvos();
	}, []);

	return { loading, conversations };
};
export default useGetConvo;