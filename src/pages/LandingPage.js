import React from "react";
import { Box, Button } from "@mui/material";

const LandingPage = () => {
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Button href="/login" sx={{ fontSize: "24px", margin: "10px" }} variant="contained">
				Login
			</Button>
			<Button href="/register" sx={{ fontSize: "24px", margin: "10px" }} variant="contained">
				Register
			</Button>
		</Box>
	);
};

export default LandingPage;
