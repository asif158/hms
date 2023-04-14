import { Avatar, Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";

const ComplaintBox = ({ open, setOpen }) => {
	return (
		<Modal
			open={open}
			onClose={(e) => setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
		>
			<Box width={450} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
				<Typography variant="h6" color="backgorund.default" textAlign="center">
					Write complaint
				</Typography>
				<Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
					<Avatar src="https://mui.com/static/images/avatar/2.jpg" sx={{ width: 30, height: 30 }} />
					<Typography fontWeight={500} variant="span">
						Jayadeep Pati
					</Typography>
				</Box>
				<TextField
					sx={{ width: "100%" }}
					id="standard-multiline-static"
					multiline
					minRows={3}
					placeholder="Leave complaint..."
				/>
				<Button sx={{ marginTop: "20px" }} variant="contained">
					Post
				</Button>
			</Box>
		</Modal>
	);
};

export default ComplaintBox;
