import React from "react";
import "./Navbar.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {useAuth} from "../../contexts/AppProvider";
import {PrivateRoutes} from "./sections/PrivateRoutes";
import {PublicRoutes} from "./sections/PublicRoutes";
import {PublicHamburgerMenu} from "./sections/PublicHamburgerMenu";

export const Navbar = () => {
	const user = useAuth();
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar
					disableGutters
					sx={{
						justifyContent: "space-between",
					}}
				>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							mr: 2,
							display: {xs: "none", md: "flex"},
						}}
					>
						Auction App
					</Typography>
					{!user.isLoggedIn && <PublicHamburgerMenu />}
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}
					>
						Auction App
					</Typography>
					{!user.isLoggedIn ? <PublicRoutes /> : <PrivateRoutes />}
				</Toolbar>
			</Container>
		</AppBar>
	);
};
