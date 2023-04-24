import { Avatar, Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";
import styled from "@emotion/styled";

const StyledAvatar = styled(Avatar)`
	color: azure;
	animation: animate 10s ease infinite;
	background-size: 400%;
	@keyframes animate {
		0% {
			background-position: 0% 0%;
		}
		25% {
			background-position: 50% 0%;
		}
		50% {
			background-position: 100% 0%;
		}
		75% {
			background-position: 50% 0%;
		}
		100% {
			background-position: 0% 0%;
		}
	}
`;

const ComplaintBox = ({ open, setOpen, name }) => {
	const [body, setBody] = useState("");
	const { addComplain } = useContext(AppContext);
	const handleClick = async () => {
		console.log("CLICKED");
		await addComplain(body);
		setOpen(false);
		setBody("");
	};
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
				<Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginY: "20px" }}>
					<StyledAvatar
						sx={{
							// fontSize: "48px",
							background: "linear-gradient(45deg,#845eb3,#d65db1,#ff6f91,#ff9671,#ffc75f)",
						}}
					>
						{name.split(" ")[0][0]}
					</StyledAvatar>
					<Typography fontWeight={500} variant="span">
						{name}
					</Typography>
				</Box>
				<TextField
					sx={{ width: "100%" }}
					id="standard-multiline-static"
					multiline
					focused
					minRows={4}
					value={body}
					onChange={(e) => setBody(e.target.value)}
					placeholder="Leave complaint..."
				/>
				<Button sx={{ marginTop: "20px" }} variant="contained" onClick={handleClick}>
					Post
				</Button>
			</Box>
		</Modal>
	);
};

export default ComplaintBox;
