import { Box,  } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Home/Header";
import Student from "../components/Users/Student/Student";

const Home = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Header />
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					paddingX: "10%",
				}}
			>
				<Student />
			</Box>
		</>
	);
};

export default Home;
