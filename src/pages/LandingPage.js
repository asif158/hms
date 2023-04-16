import React from "react";
import { Box, Link, Typography } from "@mui/material";
import styled from "@emotion/styled";
import MyDocument from "../components/PDF";

const StyledBox = styled(Box)`
	/* background-image: url("images/bg3.jpg"); */
	/* background-size: cover; */
	backdrop-filter: blur(2px);
`;

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
					height: "100%",
					width: "100%",
					display: "flex",
					// justifyContent: "center",
					// alignItems: "center",
					// flexWrap: "wrap",
					backdropFilter: "blur(3px)",
					background: "rgba(0,0,0,0.2)",
					color: "white",
				}}
			>
				<Box sx={{ display: "flex", width: "100%" }}>
					<Typography variant="h2" sx={{ padding: 3, flexGrow: "1" }}>
						Hall Management System
					</Typography>
					<Link
						sx={{
							fontSize: "24px",
							margin: "10px",
							color: "white",
							transition: "transform 0.35s",
							borderRadius: "0",
							textDecoration: "none",
							":hover": {
								textShadow: "1px 1px 3px rgb(255 255 255 /0.5)",
								transform: " translateY(-2px)",
								// borderBottom: "2px solid white",
							},
						}}
						href="/login"
					>
						Login
					</Link>
					<Link
						sx={{
							fontSize: "24px",
							margin: "10px",
							color: "white",
							transition: "transform 0.35s",
							borderRadius: "0",
							":hover": {
								textShadow: "1px 1px 3px rgb(255 255 255 /0.5)",
								transform: " translateY(-5px)",
								borderBottom: "2px solid white",
							},
						}}
						href="/register"
					>
						Register
					</Link>
					<MyDocument />
					{/* <Button
						href="/login"
						sx={{
							fontSize: "24px",
							margin: "10px",
							color: "white",
							transition: "transform 0.35s",
							borderRadius: "0",
							":hover": {
								textShadow: "1px 1px 3px rgb(255 255 255 /0.5)",
								transform: " translateY(-5px)",
								borderBottom: "2px solid white",
							},
						}}
					>
						Login
					</Button>
					<Button
						href="/register"
						sx={{
							fontSize: "24px",
							margin: "10px",
							color: "white",
							transition: "transform 0.35s",
							borderRadius: "0",
							":hover": {
								textShadow: "1px 1px 3px rgb(255 255 255 /0.5)",
								transform: " translateY(-5px)",
								borderBottom: "2px solid white",
							},
						}}
					>
						Register
					</Button> */}
				</Box>
				<Box></Box>
			</Box>
		</StyledBox>
	);
};

export default LandingPage;
