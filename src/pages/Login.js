import styled from "@emotion/styled";
import { Box, Button, TextField, } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
import LoginError from "../components/Login/LoginError";

const Login = () => {
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const { loginUser } = useContext(AppContext);
	const Navigate = useNavigate();

	const StyledButton = styled(Button)(() => ({
		left: "50%",
		transform: "translateX(-50%)",
		marginTop: "20px",
		position: "relative",
		fontSize: "16px",
		borderRadius: "25px",
		background: "transparent",
		height: "50px",
		transition: "all 0.35s ease",
		border: "2px solid rgba(0,0,0,0.5)",
		overflow: "hidden",
		color: "rgba(0,0,0,0.75)",
		":hover": {
			background: "transparent",
		},
	}));

	const handleSubmit = async (event) => {
		event.preventDefault();
		const status = await loginUser({ uid: id, password });
		if (status === true) Navigate("/home");
		else setError(true);
	};

	return (
		<>
			<Box
				sx={{
					width: "100vw",
					height: "100vh",
					background: "url('images/bg-login.webp')",
					display: "flex",
					backgroundSize: "cover",
					alignItems: "center",
				}}
			>
				<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10%" }}>
					<form
						autoComplete="off"
						onSubmit={handleSubmit}
						style={{
							position: "relative",
							background: "rgba(255, 255, 255, 0.2)",
							backdropFilter: " blur(20px)",
							borderRadius: "10px",
							padding: "5%",
							border: "2px solid rgba(255, 255, 255, 0.2)",
							boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
						}}
					>
						<h1 style={{ textAlign: "center", marginBottom: "60px", fontSize: "60px" }}>Login</h1>
						<TextField
							label="ID"
							onChange={(e) => setId(e.target.value)}
							required
							color="secondary"
							variant="outlined"
							fullWidth
							value={id}
							sx={{
								marginBottom: "20px",
								".MuiInputBase-root": { borderRadius: "25px" },
								label: {
									marginLeft: "10px",
									color: "black",
								},
								"label.MuiInputLabel-shrink ": {
									marginLeft: 0,
									color: "black",
								},
								input: {
									marginLeft: "10px",
								},
								fieldset: {
									border: "2px solid black",
								},
								".MuiInputBase-root:hover fieldset": {
									border: "2px solid black",
								},
								".MuiInputBase-root.Mui-focused fieldset": {
									border: "2px solid black",
								},
							}}
						/>
						<TextField
							label="Password"
							onChange={(e) => setPassword(e.target.value)}
							required
							variant="outlined"
							color="secondary"
							type="password"
							value={password}
							fullWidth
							sx={{
								marginBottom: "20px",
								".MuiInputBase-root": { borderRadius: "25px" },
								label: {
									marginLeft: "10px",
									color: "black",
								},
								"label.MuiInputLabel-shrink ": {
									marginLeft: 0,
									color: "black",
								},
								input: {
									marginLeft: "10px",
								},
								fieldset: {
									border: "2px solid black",
								},
								".MuiInputBase-root:hover fieldset": {
									border: "2px solid black",
								},
								".MuiInputBase-root.Mui-focused fieldset": {
									border: "2px solid black",
								},
							}}
						/>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<StyledButton
								variant="contained"
								color="info"
								disableElevation
								type="submit"
								sx={{
									borderRadius: "20px",
									height: "50px",
									width: "100px",
								}}
							>
								Login
							</StyledButton>
							<StyledButton
								disableElevation
								variant="contained"
								color="error"
								onClick={() => Navigate("/")}
								sx={{
									borderRadius: "20px",
									height: "50px",
									width: "100px",
								}}
							>
								Back
							</StyledButton>
						</Box>
					</form>
					<LoginError open={error} setOpen={setError} />
				</Box>
			</Box>
		</>
	);
};

export default Login;
