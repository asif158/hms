import Info from "./Info";
import { AppContext } from "../../../context/Context";
import { useContext } from "react";
const Staff = () => {
	const { user } = useContext(AppContext);
	return (
		<>
			<Info user={user} />
		</>
	);
};

export default Staff;
