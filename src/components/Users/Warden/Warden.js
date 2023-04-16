import React, { useContext } from "react";
import Info from "./Info";
import { AppContext } from "../../../context/Context";

const Warden = () => {
	const { user } = useContext(AppContext);

	return (
		<>
			<Info user={user} />
		</>
	);
};

export default Warden;
