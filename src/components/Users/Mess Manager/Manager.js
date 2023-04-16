import React, { useContext } from "react";
import Info from "./Info";
import { AppContext } from "../../../context/Context";
const Manager = () => {
	const { user } = useContext(AppContext);
	return <Info user={user} />;
};

export default Manager;
