import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";

const Edit = ({ setOpen }) => {
	const [sId, setSId] = useState("");
	const [charge, setCharge] = useState("");
	const { editMessCharge } = useContext(AppContext);
	const handleSubmit = async (e) => {
		e.preventDefault();
		await editMessCharge(sId, charge);
		setOpen(false);
	};

	return (
		<Box width={450} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
			<Typography variant="h6" color="backgorund.default" textAlign="center" sx={{ marginBottom: "30px" }}>
				Edit Student Mess Charge
			</Typography>
			<form autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					sx={{ width: "100%", marginBottom: "25px" }}
					label="Student ID"
					value={sId}
					onChange={(e) => setSId(e.target.value)}
					required
				/>
				<TextField
					sx={{ width: "100%", marginBottom: "25px" }}
					label="Mess Charge"
					placeholder="Enter new mess charge"
					value={charge}
					type="number"
					onChange={(e) => setCharge(e.target.value)}
					required
				/>
				<Button sx={{ left: "50%", transform: "translateX(-50%)" }} variant="contained" type="submit">
					Submit
				</Button>
			</form>
		</Box>
	);
};

export default Edit;
