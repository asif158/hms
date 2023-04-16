import React, { useContext, useState } from "react";
import AddComplaint from "./AddComplaint";
import ComplaintBox from "./ComplaintBox";
import Info from "./Info";
import { AppContext } from "../../../context/Context";

const Student = () => {
	const [open, setOpen] = useState(false);
	const { user, fetchUser } = useContext(AppContext);
	// const refresh = async () => {
	// 	await fetchUser();
	// };
	// refresh();

	return (
		<>
			<AddComplaint setOpen={setOpen} />
			<ComplaintBox open={open} setOpen={setOpen} name={user.name} />
			<Info user={user} />
		</>
	);
};

export default Student;
