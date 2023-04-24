import React, { useContext, useState } from "react";
import Info from "./Info";
import { AppContext } from "../../../context/Context";
import Edit from "./Edit";
import { ModeEdit } from "@mui/icons-material";
import { Button, Modal } from "@mui/material";
const Manager = () => {
	const [open, setOpen] = useState(false);
	const { user } = useContext(AppContext);
	return (
		<>
			<Info user={user} />
			<Button
				onClick={() => setOpen(true)}
				sx={{
					marginTop: "40px",
					width: "20%",
					display: "flex",
					alignItems: "center",
					background: "rgba(200,200,200,0.5)",
					color: "black",
					boxShadow: "0px 1px 3px rgb(0,0,0,0.5)",
					":hover": {
						background: "rgba(200,200,200,0.3)",
					},
				}}
			>
				<ModeEdit sx={{ marginRight: "10px" }} />
				Update Mess Charge
			</Button>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
			>
				<Edit setOpen={setOpen} />
			</Modal>
		</>
	);
};

export default Manager;
