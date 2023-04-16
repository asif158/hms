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
				subheader={`${new Date(complain.createdAt).toDateString()}`}
				onClick={() => setExpand(!expand)}
				sx={{
					cursor: "pointer",
					"span.MuiTypography-body1": {
						fontSize: "1rem",
					},
					display: "flex",
					alignItems: "center",
				}}
			/>

			<Collapse timeout={400} unmountOnExit in={expand}>
				<Divider />
				<CardContent sx={{ display: "flex", alignItems: "center", paddingX: "2%" }}>
					<Typography sx={{ width: "95%", paddingX: "2%" }}>{complain.body}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default Complain;
