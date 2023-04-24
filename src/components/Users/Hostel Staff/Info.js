import styled from "@emotion/styled";
import { ExpandMore, Info as UserInfo } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";
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
						<span style={{ fontWeight: "bold", width: "15%" }}>Name:</span>
						{user.name}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Phone:</span>
						{user.phone}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>ID:</span>
						{user.uid}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Hall:</span> {user.hall.name}
					</Typography>
					<Typography sx={{ display: "flex", alignItems: "center" }}>
						<span style={{ fontWeight: "bold", width: "15%" }}>Salary:</span> {user.salary}
					</Typography>
				</AccordionDetails>
			</Accordion>
		</>
	);
};

export default Info;
