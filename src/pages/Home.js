import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Header from "../components/Home/Header";
import Staff from "../components/Users/Hostel Staff/Staff";
import Student from "../components/Users/Student/Student";
import Manager from "../components/Users/Mess Manager/Manager";
import { AppContext } from "../context/Context";
import Warden from "../components/Users/Warden/Warden";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const Navigate = useNavigate();
	const { user } = useContext(AppContext);
	useEffect(() => {
		if (user === null) Navigate("/login");
	});
	const type = user?.uid.slice(0, 2);
	return (
		<>
			{type && (
				<>
					<Header />
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							flexWrap: "wrap",
							paddingX: "10%",
							".MuiAccordion-root": {
								borderRadius: "10px",
								":last-of-type": {
									borderRadius: "10px",
								},
							},
							".MuiAccordionSummary-root": {
								borderRadius: "10px 10px 10px 10px",
								transition: "0.2s",
							},
							".MuiAccordionSummary-root.Mui-expanded": {
								borderRadius: "10px 10px 0 0",
								transition: "0.3s",
							},
							marginBottom: "50px",
						}}
					>
						{type === "ST" && <Student />}
						{type === "SS" && <Staff />}
						{type === "SW" && <Warden />}
						{type === "MM" && <Manager />}
					</Box>
				</>
			)}
		</>
	);
};

export default Home;
