import { Close, Error } from "@mui/icons-material";
import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const LoginError = ({ open, setOpen }) => {
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		height: 200,
		bgcolor: "background.paper",
		borderRadius: 5,
		boxShadow: 24,
		p: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	};
	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Close
					sx={{ position: "absolute", right: 15, top: 15, cursor: "pointer" }}
					onClick={() => setOpen(false)}
				/>
				<Error sx={{ width: 80, height: 80, marginBottom: "30px" }} />
				<Typography variant="h6"> Invalid ID or Password</Typography>
			</Box>
		</Modal>
	);
};

export default LoginError;
