import { Grid } from "@mui/material";
import React from "react";
import Room from "./Room";

const RoomGrid = ({ rooms }) => {
	return (
		<>
			<Grid
				container
				sx={{
					marginBottom: "10px",
					":hover .MuiGrid-item button": {
						color: "rgb(255 255 255/0.7)",
					},
				}}
			>
				<Grid item xs={1}></Grid>
				{rooms.slice(0, 10).map((room, index) => {
					return (
						<Grid item xs={1} key={`room${index}`}>
							<Room occupied={room === 1} index={index} />
						</Grid>
					);
				})}
			</Grid>
			<Grid
				container
				sx={{
					marginBottom: "10px",
					":hover .MuiGrid-item button": {
						color: "rgb(255 255 255/0.7)",
					},
				}}
			>
				<Grid item xs={1}></Grid>

				{rooms.slice(10, 20).map((room, index) => {
					return (
						<Grid item xs={1} key={`room${10 + index}`}>
							<Room occupied={room === 1} index={10 + index} />
						</Grid>
					);
				})}
			</Grid>
			<Grid
				container
				sx={{
					marginBottom: "10px",
					":hover .MuiGrid-item button": {
						color: "rgb(255 255 255/0.7)",
					},
				}}
			>
				<Grid item xs={1}></Grid>

				{rooms.slice(20, 30).map((room, index) => {
					return (
						<Grid item xs={1} key={`room${20 + index}`}>
							<Room occupied={room === 1} index={20 + index} />
						</Grid>
					);
				})}
			</Grid>
			<Grid
				container
				sx={{
					marginBottom: "10px",
					":hover .MuiGrid-item button": {
						color: "rgb(255 255 255/0.7)",
					},
				}}
			>
				<Grid item xs={1}></Grid>

				{rooms.slice(30, 40).map((room, index) => {
					return (
						<Grid item xs={1} key={`room${30 + index}`}>
							<Room occupied={room === 1} index={30 + index} />
						</Grid>
					);
				})}
			</Grid>
			<Grid
				container
				sx={{
					marginBottom: "10px",
					":hover .MuiGrid-item button": {
						color: "rgb(255 255 255/0.7)",
					},
				}}
			>
				<Grid item xs={1}></Grid>

				{rooms.slice(40, 50).map((room, index) => {
					return (
						<Grid item xs={1} key={`room${40 + index}`}>
							<Room occupied={room === 1} index={40 + index} />
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default RoomGrid;
