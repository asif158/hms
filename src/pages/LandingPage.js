import React from "react";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
	background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
		url("https://images.unsplash.com/photo-1652195057379-62ecfa7dc04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1779&q=80");
	background-size: cover;
	font-family: "Poppins", sans-serif;
`;

const StyledButton = styled(Button)(() => ({
	fontFamily: "'Poppins', sans-serif",
	position: "relative",
	fontSize: "20px",
	borderRadius: "25px",
	background: "transparent",
	height: "50px",
	width: "150px",
	transition: "all 0.35s ease",
	overflow: "hidden",
	border: "2px solid rgba(0,0,0,0.5)",
	color: "rgba(0,0,0,0.75)",
	":hover": {
		background: "transparent",
		transform: "translateY(-5px)",
	},
}));

const LandingPage = () => {
	return (
		<StyledBox
			sx={{
				height: "100vh",

				width: "100vw",
			}}
		>
			<Box
				sx={{
					backdropFilter: "blur(5px)",
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
					flexDirection: "column",
					background: "rgba(0,0,0,0.1)",
				}}
			>
				<Box
					sx={{
						textAlign: "center",
						flex: "3",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						backdropFilter: "blue(5px)",
					}}
				>
					<span style={{ fontSize: "40px", fontWeight: 300 }}> Welcome to</span>
					<span style={{ fontSize: "100px", marginY: "30px", fontWeight: 500 }}>
						Hostel Management System
					</span>
					<span style={{ fontSize: "80px", fontWeight: 400 }}> IIIT, Ranchi</span>
				</Box>
				<Box
					sx={{
						flex: "1",
						display: "flex",
						width: "40%",
						justifyContent: "space-evenly",
						boxSizing: "border-box",
					}}
				>
					<StyledButton href="/login" variant="contained">
						Login
					</StyledButton>
					<StyledButton href="/register" variant="contained">
						Register
					</StyledButton>
				</Box>
			</Box>
		</StyledBox>
	);
};

export default LandingPage;
