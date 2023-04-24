import styled from "@emotion/styled";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";

const Register = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [password, setPassword] = useState("");
	const [type, setType] = useState("");
	const { registerUser } = useContext(AppContext);
	const Navigate = useNavigate();

	const StyledButton = styled(Button)(() => ({
		fontFamily: "'Poppins', sans-serif",
		left: "50%",
		transform: "translateX(-50%)",
		marginTop: "20px",
		position: "relative",
		fontSize: "16px",
		borderRadius: "25px",
		background: "transparent",
		height: "50px",
		transition: "all 0.35s ease",
		overflow: "hidden",
		border: "2px solid rgba(0,0,0,0.5)",
		color: "rgba(0,0,0,0.75)",
		":hover": {
			background: "transparent",
		},
	}));

	const handleSubmit = async (event) => {
		event.preventDefault();
		await registerUser({ type, name, phone, address: address.trim(), password });
		Navigate("/home");
	};
	return (
		<>
			<Box
				sx={{
					width: "100vw",
					height: "100vh",
					background:
						"linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),url('https://images.unsplash.com/photo-1652195057379-62ecfa7dc04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1779&q=80')",
				}}
			>
				<Box
					sx={{
						backdropFilter: "blur(5px)",
						width: "100%",
						height: "100%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<h1
						style={{
							textAlign: "center",
							marginBottom: "45px",
							fontSize: "50px",
							fontFamily: "'Poppins', sans-serif",
						}}
					>
						Register
					</h1>

					<FormControl
						sx={{
							marginX: "16%",
							marginY: "20px",
							fontFamily: "'Poppins', sans-serif",
							".MuiInputBase-root": { borderRadius: "25px" },
							label: {
								marginLeft: "10px",
								color: "black",
								fontFamily: "'Poppins', sans-serif",
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
							".MuiSelect-select": {
								marginLeft: "10px",
								fontFamily: "'Poppins', sans-serif",
							},
						}}
					>
						<InputLabel id="demo-simple-select-label">Register as</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={type}
							label="Register as"
							onChange={(e) => setType(e.target.value)}
						>
							<MenuItem value={"ST"}>Student</MenuItem>
							<MenuItem value={"SS"}>Hostel Staff</MenuItem>
							<MenuItem value={"SW"}>Warden</MenuItem>
							<MenuItem value={"MM"}>Mess Manager</MenuItem>
						</Select>
					</FormControl>
					{type.length > 0 && (
						<form autoComplete="off" onSubmit={handleSubmit} style={{ margin: "0 16%" }}>
							<TextField
								label="Full Name"
								onChange={(e) => setName(e.target.value)}
								required
								variant="outlined"
								color="primary"
								sx={{
									marginBottom: "20px",
									".MuiInputBase-root": { borderRadius: "25px" },
									label: {
										marginLeft: "10px",
										color: "black",
										fontFamily: "'Poppins', sans-serif",
									},
									"label.MuiInputLabel-shrink ": {
										marginLeft: 0,
										color: "black",
									},
									input: {
										marginLeft: "10px",
										fontFamily: "'Poppins', sans-serif",
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
								fullWidth
								value={name}
							/>
							<TextField
								label="Phone"
								onChange={(e) => setPhone(e.target.value)}
								required
								variant="outlined"
								color="primary"
								sx={{
									marginBottom: "20px",
									".MuiInputBase-root": { borderRadius: "25px" },
									label: {
										marginLeft: "10px",
										color: "black",
										fontFamily: "'Poppins', sans-serif",
									},
									"label.MuiInputLabel-shrink ": {
										marginLeft: 0,
										color: "black",
									},
									input: {
										marginLeft: "10px",
										fontFamily: "'Poppins', sans-serif",
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
								type="tel"
								inputProps={{ pattern: "[0-9]{10}" }}
								fullWidth
								value={phone}
							/>
							{type === "ST" && (
								<TextField
									label="Address"
									onChange={(e) => setAddress(e.target.value)}
									required
									multiline
									rows={4}
									variant="outlined"
									color="primary"
									sx={{
										marginBottom: "20px",
										".MuiInputBase-root": { borderRadius: "25px" },
										label: {
											marginLeft: "10px",
											color: "black",
											fontFamily: "'Poppins', sans-serif",
										},
										"label.MuiInputLabel-shrink ": {
											marginLeft: 0,
											color: "black",
										},
										input: {
											marginLeft: "10px",
											fontFamily: "'Poppins', sans-serif",
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
									fullWidth
									value={address}
								/>
							)}
							<TextField
								label="Password"
								onChange={(e) => setPassword(e.target.value)}
								required
								variant="outlined"
								color="primary"
								type="password"
								value={password}
								fullWidth
								sx={{
									marginBottom: "20px",
									".MuiInputBase-root": { borderRadius: "25px" },
									label: {
										marginLeft: "10px",
										color: "black",
										fontFamily: "'Poppins', sans-serif",
									},
									"label.MuiInputLabel-shrink ": {
										marginLeft: 0,
										color: "black",
									},
									input: {
										marginLeft: "10px",
										fontFamily: "'Poppins', sans-serif",
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
							<StyledButton
								variant="contained"
								color="success"
								type="submit"
								sx={{
									borderRadius: "20px",
									height: "50px",
									width: "150px",
									fontSize: "18px",
								}}
							>
								Register
							</StyledButton>
						</form>
					)}
					<StyledButton
						variant="contained"
						color="error"
						onClick={() => Navigate("/")}
						sx={{
							borderRadius: "20px",
							height: "50px",
							width: "150px",
							fontSize: "18px",
						}}
					>
						Back
					</StyledButton>
				</Box>
			</Box>
		</>
	);
};

export default Register;
