import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";
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
					background:
						"url('https://images.unsplash.com/photo-1652195057379-62ecfa7dc04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1779&q=80')",
					display: "flex",
					backgroundSize: "cover",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
