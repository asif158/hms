import { ExpandMore, Fastfood, Info as UserInfo } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import PDF from "./PDF";
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
	const [open, setOpen] = useState(false);
	const [yourInfo, setYourInfo] = useState(true);
	const [messInfo, setMessInfo] = useState(true);

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
						<span style={{ fontWeight: "bold", width: "15%" }}>Name: </span>
						{user.name}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Phone: </span> {user.phone}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>ID: </span>
						{user.uid}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Salary: </span> {user.salary}
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
				expanded={messInfo}
			>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{ background: "rgb(230,230,230)" }}
					onClick={() => setMessInfo(!messInfo)}
				>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<Fastfood sx={{ marginRight: "20px" }} />
						Mess Details
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Hall: </span> {user.hall.name}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>To be collected:</span>{" "}
						{user.hall.rooms.reduce((partialSum, i) => partialSum + i, 0) * user.hall.messCharge}
					</Typography>
					<Button
						onClick={() => setOpen(true)}
						disableRipple
						sx={{
							color: "black",
							marginTop: "20px",
							padding: "5px",
							background: "rgba(200,200,200,0.5)",
							border: "2px solid rgba(200,200,200)",
							":hover": {
								background: "rgba(200,200,200,0.3)",
							},
						}}
					>
						PDF
					</Button>
					<Modal
						open={open}
						onClose={() => setOpen(false)}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							iframe: {
								width: "75%",
								height: "90%",
							},
						}}
					>
						<PDF
							hall={user.hall.name}
							charge={user.hall.messCharge}
							students={user.hall.rooms.reduce((partialSum, i) => partialSum + i, 0)}
						/>
					</Modal>
				</AccordionDetails>
			</Accordion>
		</>
	);
};

export default Info;
