import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Home/Header";
import { Feedback } from "@mui/icons-material";
import Student from "../components/Users/Student/Student";

const Home = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Header />
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					paddingX: "10%",
				}}
			>
				{/* <Student /> */}
				{/* <Info />
				<Tooltip title="Raise a complaint" onClick={(e) => setOpen(true)}>
					<Fab color="error" sx={{ position: "fixed", bottom: 20, left: 10 }}>
						<Feedback />
					</Fab>
				</Tooltip>
				<ComplaintBox open={open} setOpen={setOpen} /> */}
			</Box>
		</>
	);
};

export default Home;
