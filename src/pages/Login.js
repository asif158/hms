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

	const StyledButton = styled(Button)`
		margin-top: 20px;
		position: relative;
		left: calc((100% - 150px) / 2);
	`;

	const handleSubmit = async (event) => {
		event.preventDefault();
		const status = await loginUser({ uid: id, password });
		if (status === true) Navigate("/home");
		else setError(true);
	};

	return (
		<>
			<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<form autoComplete="off" onSubmit={handleSubmit} style={{ position: "relative", top: "50px" }}>
					<h1 style={{ textAlign: "center", marginBottom: "60px", fontSize: "60px" }}>Login</h1>
					<TextField
						label="ID"
						onChange={(e) => setId(e.target.value)}
						required
						variant="outlined"
						color="secondary"
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
						value={id}
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
							mb: 3,
							".MuiInputBase-root": { borderRadius: "25px" },
							"label.MuiInputLabel-shrink ": {
								marginLeft: 0,
							},
							label: {
								marginLeft: "10px",
							},
							input: {
								marginLeft: "10px",
							},
						}}
					/>
					<StyledButton
						variant="contained"
						color="info"
						type="submit"
						sx={{
							borderRadius: "20px",
							height: "50px",
							width: "150px",
							fontSize: "18px",
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
							width: "150px",
							fontSize: "18px",
							display: "block",
						}}
					>
						Back
					</StyledButton>
				</form>
				<LoginError open={error} setOpen={setError} />
			</Box>
		</>
	);
};

export default Login;
