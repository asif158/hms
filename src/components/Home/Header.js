import { AppBar, IconButton, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const [auth, setAuth] = React.useState(true);
	const Navigate = useNavigate();

	const handleLogout = () => {
		Navigate("/login");
	};
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Hall Management Portal
				</Typography>
				{auth && (
					<div>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleLogout}
							color="inherit"
						>
							<Logout />
						</IconButton>
					</div>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
