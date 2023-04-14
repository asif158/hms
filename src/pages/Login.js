import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [idError, setIdError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const Navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		setIdError(false);
		setPasswordError(false);

		if (id === "") {
			setIdError(true);
		}
		if (password === "") {
			setPasswordError(true);
		}

		if (id && password) {
			Navigate("/home");
		}
	};
	return (
		<>
			<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<form autoComplete="off" onSubmit={handleSubmit} style={{ position: "relative", top: "50px" }}>
					<h2>Login</h2>
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
					<Button variant="contained" color="warning" type="submit">
						Login
					</Button>
				</form>
			</Box>
		</>
	);
};

export default Login;
