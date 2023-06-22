import React from "react";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
	background: url("images/bg1.webp");
	background-size: cover;
`;

const StyledButton = styled(Button)(() => ({
	fontFamily: "'Poppins', sans-serif",
	position: "relative",
	fontSize: "24px",
	textTransform: "capitalize",
	background: "transparent",
	height: "50px",
	transition: "all 0.35s ease",
	overflow: "hidden",
	boxShadow: "none",
	fontWeight: "normal",
	padding: "0",
	color: "white",
	":hover": {
		background: "transparent",
		transform: "translateY(-3px)",
		boxShadow: "none",
	},
	"::after": {
		content: "''",
		height: "3px",
		width: "0%",
		bottom: "0",
		left: "15%",
		backgroundColor: "white",
		position: "absolute",
		transition: "0.35s ease",
	},
	":hover::after": {
		width: "70%",
	},
}));

const LandingPage = () => {
	return (
		<>
			<Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
				<Box
					sx={{
						width: "57%",
						display: "flex",
						fontFamily: "'Poppins', sans-serif",
						alignItems: "center",
						flexDirection: "column",
						backgroundColor: "rgb(239,180,54)",
						color: "white",
					}}
				>
					<Box
						sx={{
							textAlign: "center",
							flex: "3",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly",
							alignItems: "flex-start",
						}}
					>
						<span style={{ fontSize: "35px", fontWeight: 300 }}> Welcome to</span>
						<span
							style={{
								fontSize: "95px",
								marginY: "30px",
								fontWeight: 500,
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
							}}
						>
							<span>Hall</span>
							<span>Management</span>
							<span>System</span>
						</span>
						<span style={{ fontSize: "55px", fontWeight: 400 }}> IIIT, Ranchi</span>
					</Box>
				</Box>
				<StyledBox sx={{ width: "43%" }}>
					<Box
						sx={{
							display: "flex",
							width: "50%",
							justifyContent: "center",
							boxSizing: "border-box",
							marginTop: "10%",
						}}
					>
						<StyledButton href="/login" variant="contained" sx={{ width: "100px" }}>
							Login
						</StyledButton>
						<StyledButton href="/register" variant="contained" sx={{ width: "150px" }}>
							Register
						</StyledButton>
					</Box>
				</StyledBox>
			</Box>
		</>
	);
};

export default LandingPage;
