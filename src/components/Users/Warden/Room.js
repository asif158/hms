import { Button } from "@mui/material";
import React from "react";

const Room = ({ occupied, index }) => {
	return (
		<Button
			sx={{
				width: "30px",
				height: "30px",
				backgroundColor: `${occupied ? "green" : "gray"}`,
				padding: 0,
				minWidth: 0,
				color: "transparent",
				":hover": {
					backgroundColor: `${occupied ? "green" : "gray"}`,
				},
				cursor: "default",
			}}
			disableRipple
		>
			{index + 1}
		</Button>
	);
};

export default Room;
