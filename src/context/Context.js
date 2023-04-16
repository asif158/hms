import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

	useEffect(() => {
		const type = user?.uid.slice(0, 2);
		const getUser = async () => {
			console.log("USEEFFECT SHIT GOING DOWN");
			let newUser;
			try {
				if (type === "ST") {
					newUser = await axios.get(`http://localhost:5000/api/v1/student/${user._id}`);
				} else if (type === "SW") {
					newUser = await axios.get(`http://localhost:5000/api/v1/staff/${user._id}`);
				}
			} catch (error) {
				console.log(error);
			}
			if (type === "ST" && JSON.stringify(user) !== JSON.stringify(newUser.data.student)) {
				console.log("newUSER:", newUser.data.student);
				setUser(newUser.data.student);
			} else if (type === "SW" && JSON.stringify(user) !== JSON.stringify(newUser.data.staff)) {
				console.log("newUSER:", newUser.data.staff);
				setUser(newUser.data.staff);
			}
		};
		if (type === "ST" || type === "SW") getUser();
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	const loginUser = async ({ uid, password }) => {
		const type = uid.slice(0, 2);

		try {
			let logged;
			switch (type) {
				case "ST":
					logged = await axios.post("http://localhost:5000/api/v1/student/login", {
						uid,
						password,
					});
					if (logged.data.status) setUser(logged.data.student);

					return logged.data.status;
				case "SS":
					logged = await axios.post("http://localhost:5000/api/v1/staff/login", {
						uid,
						password,
					});
					if (logged.data.status) setUser(logged.data.staff);
					return logged.data.status;
				case "SW":
					logged = await axios.post("http://localhost:5000/api/v1/staff/login", {
						uid,
						password,
					});
					if (logged.data.status) setUser(logged.data.staff);
					return logged.data.status;
				case "MM":
					logged = await axios.post("http://localhost:5000/api/v1/manager/login", {
						uid,
						password,
					});
					if (logged.data.status) setUser(logged.data.manager);
					return logged.data.status;
				default:
					return false;
			}
		} catch (error) {
			console.log(error);
		}
	};

	const registerUser = async ({ type, name, phone, address, password }) => {
		try {
			let registered;
			switch (type) {
				case "ST":
					registered = await axios.post("http://localhost:5000/api/v1/student/register", {
						name,
						phone,
						address,
						password,
					});
					setUser(registered.data.student);
					break;
				case "SS":
					registered = await axios.post("http://localhost:5000/api/v1/staff/register", {
						name,
						phone,
						password,
					});
					setUser(registered.data.staff);
					break;
				case "SW":
					registered = await axios.post("http://localhost:5000/api/v1/staff/warden/register", {
						name,
						phone,
						password,
					});
					setUser(registered.data.staff);
					break;
				case "MM":
					registered = await axios.post("http://localhost:5000/api/v1/manager/register", {
						name,
						phone,
						password,
					});
					setUser(registered.data.manager);
					break;
				default:
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fetchUser = async () => {
		console.log("SHIT'S GOING DOWN");
		const type = user.uid.slice(0, 2);
		if (type === "ST") {
			const newUser = await axios.get(`http://localhost:5000/api/v1/student/${user._id}`);
			setUser(newUser.data.student);
		} else {
			const newUser = await axios.get(`http://localhost:5000/api/v1/staff/${user._id}`);
			setUser(newUser.data.staff);
		}
	};

	const addComplain = async (body) => {
		await axios.post(`http://localhost:5000/api/v1/student/makecomplaint/${user._id}`, {
			body,
		});
		await fetchUser();
	};

	const deleteComplain = async (id) => {
		await axios.delete(`http://localhost:5000/api/v1/complaint/delete/${id}`);
		await fetchUser();
	};

	return (
		<AppContext.Provider value={{ registerUser, loginUser, user, addComplain, deleteComplain }}>
			{children}
		</AppContext.Provider>
	);
};
