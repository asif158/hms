import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [password, setPassword] = useState("");
	const [idError, setIdError] = useState(false);
	const [nameError, setNameError] = useState(false);
	const [phoneError, setPhoneError] = useState(false);
	const [addressError, setAddressError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const Navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		setIdError(false);
		setPasswordError(false);

		if (id === "") {
			setIdError(true);
		}
		if (name === "") {
			setNameError(true);
		}
		if (phone === "") {
			setPhoneError(true);
		}
		if (password === "") {
			setPasswordError(true);
		}
		if (address === "") {
			setAddressError(true);
		}

		if (id && password) {
			Navigate("/home");
		}
	};
	return (
		<>
			<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<form autoComplete="off" onSubmit={handleSubmit} style={{ position: "relative", top: "50px" }}>
					<h2>Register</h2>
					<TextField
						label="Full Name"
						onChange={(e) => setName(e.target.value)}
						required
						variant="outlined"
						color="secondary"
						sx={{ mb: 3 }}
						fullWidth
						value={name}
						error={nameError}
					/>
					<TextField
						label="ID"
						onChange={(e) => setId(e.target.value)}
						required
						variant="outlined"
						color="secondary"
						sx={{ mb: 3 }}
						fullWidth
						value={id}
						error={idError}
					/>
					<TextField
						label="Phone"
						onChange={(e) => setPhone(e.target.value)}
						required
						variant="outlined"
						color="secondary"
						sx={{ mb: 3 }}
						type="tel"
						inputProps={{ pattern: "[0-9]{10}" }}
						fullWidth
						value={phone}
						error={phoneError}
					/>
					<TextField
						label="Address"
						onChange={(e) => setAddress(e.target.value)}
						required
						multiline
						minRows={3}
						variant="outlined"
						color="secondary"
						sx={{ mb: 3 }}
						fullWidth
						value={address}
						error={addressError}
					/>
					<TextField
						label="Password"
						onChange={(e) => setPassword(e.target.value)}
						required
						variant="outlined"
						color="secondary"
						type="password"
						value={password}
						error={passwordError}
						fullWidth
						sx={{ mb: 3 }}
					/>
					<Button variant="outlined" color="success" type="submit">
						Register
					</Button>
				</form>
			</Box>
		</>
	);
};

export default Register;
