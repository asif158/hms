import { Apartment, ExpandMore, Feedback, Payment, Info as UserInfo } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Complain from "./Complain";
import styled from "@emotion/styled";

const StyledAvatar = styled(Avatar)`
	color: azure;
	animation: animate 10s ease infinite;
	background-size: 400%;
	@keyframes animate {
		0% {
			background-position: 0% 0%;
		}
		25% {
			background-position: 50% 0%;
		}
		50% {
			background-position: 100% 0%;
		}
		75% {
			background-position: 50% 0%;
		}
		100% {
			background-position: 0% 0%;
		}
	}
`;

const Info = ({ user }) => {
	const [yourInfo, setYourInfo] = useState(true);
	const [hallInfo, setHallInfo] = useState(true);
	const [payInfo, setPayInfo] = useState(true);
	const [complainInfo, setComplainInfo] = useState(true);

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
				<StyledAvatar
					sx={{
						height: 100,
						width: 100,
						fontSize: "48px",
						background: "linear-gradient(45deg,#845eb3,#d65db1,#ff6f91,#ff9671,#ffc75f)",
					}}
				>
					{user.name.split(" ")[0][0]}
				</StyledAvatar>
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
				expanded={yourInfo}
			>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{ background: "rgb(230,230,230)" }}
					onClick={() => setYourInfo(!yourInfo)}
				>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<UserInfo sx={{ marginRight: "20px" }} />
						Your Info
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Name:</span> {user.name}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>ID:</span> {user.uid}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Phone:</span> {user.phone}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Address :</span> {user.address}
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
				expanded={hallInfo}
			>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{ background: "rgb(230,230,230)" }}
					onClick={() => setHallInfo(!hallInfo)}
				>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<Apartment sx={{ marginRight: "20px" }} /> Hall Information
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Room No:</span> {user.room}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Hall:</span> {user.hall.name}
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
				expanded={payInfo}
			>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{ background: "rgb(230,230,230)" }}
					onClick={() => setPayInfo(!payInfo)}
				>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<Payment sx={{ marginRight: "20px" }} /> Due Payments
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Hall Due:</span> {user.halldue}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Mess Due:</span> {user.messdue}
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
				expanded={complainInfo}
			>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{ background: "rgb(230,230,230)" }}
					onClick={() => setComplainInfo(!complainInfo)}
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
