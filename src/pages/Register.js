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

	const StyledButton = styled(Button)`
		margin-top: 20px;
		position: relative;
		left: calc((100% - 150px) / 2);
	`;

	const handleSubmit = async (event) => {
		event.preventDefault();
		await registerUser({ type, name, phone, address: address.trim(), password });
		Navigate("/home");
	};
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "flex-start",
					flexWrap: "wrap",
				}}
			>
				<h1
					style={{
						textAlign: "center",
						marginBottom: "45px",
						fontSize: "60px",
						width: "100%",
					}}
				>
					Register
				</h1>

				<FormControl
					fullWidth
					sx={{
						marginX: "16%",
						marginY: "20px",
						".MuiInputBase-root": { borderRadius: "25px" },
						label: {
							marginLeft: "10px",
						},
						"label.MuiInputLabel-shrink ": {
							marginLeft: 0,
						},
						".MuiSelect-select": {
							marginLeft: "10px",
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
					<form autoComplete="off" onSubmit={handleSubmit} style={{ width: "100%", margin: "0 16%" }}>
						<TextField
							label="Full Name"
							onChange={(e) => setName(e.target.value)}
							required
							variant="outlined"
							color="primary"
							sx={{
								mb: 3,
								".MuiInputBase-root": { borderRadius: "25px" },
								label: {
									marginLeft: "10px",
								},
								"label.MuiInputLabel-shrink ": {
									marginLeft: 0,
								},
								input: {
									marginLeft: "10px",
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
								mb: 3,
								".MuiInputBase-root": { borderRadius: "25px" },
								label: {
									marginLeft: "10px",
								},
								"label.MuiInputLabel-shrink ": {
									marginLeft: 0,
								},
								input: {
									marginLeft: "10px",
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
								rows={3}
								variant="outlined"
								color="primary"
								sx={{
									mb: 3,
									".MuiInputBase-root": { borderRadius: "25px" },
									label: {
										marginLeft: "10px",
									},
									"label.MuiInputLabel-shrink ": {
										marginLeft: 0,
									},
									input: {
										marginLeft: "10px",
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
								mb: 3,
								".MuiInputBase-root": { borderRadius: "25px" },
								label: {
									marginLeft: "10px",
								},
								"label.MuiInputLabel-shrink ": {
									marginLeft: 0,
								},
								input: {
									marginLeft: "10px",
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
						<StyledButton
							variant="contained"
							color="error"
							onClick={() => Navigate("/")}
							sx={{
								borderRadius: "20px",
								height: "50px",
								width: "150px",
								fontSize: "18px",
								display: "block",
							}}
						>
							Back
						</StyledButton>
					</form>
				)}
			</Box>
		</>
	);
};

export default Register;
