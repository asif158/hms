import { Apartment, ExpandMore, Feedback, Payment, Info as UserInfo } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import Complain from "./Complain";

const Info = ({ user }) => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
					margin: "50px 0 20px 0",
					width: "100%",
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
						<span style={{ fontWeight: "bold", width: "10%" }}>Name:</span> {user.name}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "10%" }}>ID:</span> {user.uid}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "10%" }}>Phone:</span> {user.phone}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "10%" }}>Address :</span> {user.address}
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
						<Apartment sx={{ marginRight: "20px" }} /> Hall Information
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "10%" }}>Room No:</span> {user.room}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "10%" }}>Hall:</span> {user.hall.name}
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
						<Payment sx={{ marginRight: "20px" }} /> Due Payments
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "10%" }}>Hall Due:</span> {user.halldue}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "10%" }}>Mess Due:</span> {user.messdue}
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
						<Feedback sx={{ marginRight: "20px" }} /> Complaints
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{user.complaints.length === 0 && <Typography>No Complaints.</Typography>}
					{user.complaints.map((complain) => {
						return <Complain key={complain._id} complain={complain} />;
					})}
				</AccordionDetails>
			</Accordion>
		</>
	);
};

export default Info;
