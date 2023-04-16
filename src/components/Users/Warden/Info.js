import { Apartment, ExpandMore, Feedback, Info as UserInfo } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Complain from "./Complain";
import RoomGrid from "./RoomGrid";

const Info = ({ user }) => {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
					margin: "50px 0 20px 0",
				}}
			>
				<Avatar src="https://mui.com/static/images/avatar/2.jpg" sx={{ height: 100, width: 100 }} />
				<Typography variant="h3" sx={{ marginLeft: "30px" }}>
					{user.name}
				</Typography>
			</Box>
			<Accordion
				sx={{
					width: "100%",
					marginTop: "50px",
					"::before": {
						display: "none",
					},
				}}
				elevation={2}
				disableGutters
			>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{ background: "rgb(230,230,230)" }}
				>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<UserInfo sx={{ marginRight: "20px" }} />
						Your Info
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "10%" }}>Name:</span>
						{user.name}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "10%" }}>Phone:</span> {user.phone}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "10%" }}>ID:</span> {user.uid}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "10%" }}>Hall:</span> {user.hall.name}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "10%" }}>Salary:</span>
						{user.salary}
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					width: "100%",
					marginTop: "50px",

					"::before": {
						display: "none",
					},
				}}
				elevation={2}
				disableGutters
			>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{ background: "rgb(230,230,230)" }}
				>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<Apartment sx={{ marginRight: "20px" }} /> Hall Info
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "20%" }}>Rooms Occupied:</span>
						{user.hall.rooms.reduce((sum, room) => sum + room, 0)}/50
					</Typography>
					<Box sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
						<span style={{ fontWeight: "bold", width: "20%" }}>Rooms Occupancy:</span>
						<Box
							sx={{
								flex: 1,
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "center",
							}}
						>
							<RoomGrid rooms={user.hall.rooms} />
						</Box>
					</Box>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					width: "100%",
					marginTop: "50px",

					"::before": {
						display: "none",
					},
				}}
				elevation={2}
				disableGutters
			>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{ background: "rgb(230,230,230)" }}
				>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<Feedback sx={{ marginRight: "20px" }} /> Complaints
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{user.hall.complaints.length === 0 && <Typography>No Complaints.</Typography>}
					{user.hall.complaints.map((complain) => {
						return <Complain key={complain._id} complain={complain} />;
					})}
				</AccordionDetails>
			</Accordion>
		</>
	);
};

export default Info;
