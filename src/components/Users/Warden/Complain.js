import { Close } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Collapse, Divider, Tooltip, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";

const Complain = ({ complain }) => {
	const [expand, setExpand] = useState(false);
	const { deleteComplain } = useContext(AppContext);
	const handleDelete = async () => {
		await deleteComplain(complain._id);
	};
	return (
		<Card elevation={1} sx={{ marginBottom: "10px" }}>
			<CardHeader
				action={
					<Tooltip title="Delete Complain" sx={{ cursor: "pointer" }} onClick={handleDelete}>
						<Close />
					</Tooltip>
				}
				title={complain.studentName}
				subheader={`${new Date(complain.createdAt).toDateString()}`}
				onClick={() => setExpand(!expand)}
				sx={{
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					".MuiCardHeader-title": {
						fontSize: "18px",
					},
					".MuiCardHeader-subheader ": {
						fontSize: "12px",
						fontWeight: "bold",
						color: "rgba(140,140,140,1)",
					},
				}}
			/>

			<Collapse timeout={400} unmountOnExit in={expand}>
				<Divider />
				<CardContent sx={{ display: "flex", alignItems: "center", paddingX: "2%" }}>
					<Typography sx={{ width: "95%" }}>{complain.body}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default Complain;
