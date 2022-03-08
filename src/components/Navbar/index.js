import React from "react";
import "./Navbar.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "react-router-dom";

const pages = [
	{title: "Home", path: "/"},
	{title: "Login", path: "login"},
	{title: "Signup", path: "signup"},
];
const settings = [
	{title: "Profile", path: "profile"},
	{title: "Dashboard", path: "dashboard"},
	{title: "Logout", path: "logout"},
];

export const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{mr: 2, display: {xs: "none", md: "flex"}}}
					>
						Auction App
					</Typography>

					<Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: {xs: "block", md: "none"},
							}}
						>
							{pages.map((page, i) => (
								<Link
									to={page.path}
									textAlign="center"
									className="dropdown-btn"
								>
									<MenuItem key={i} onClick={handleCloseNavMenu}>
										{page.title}
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}
					>
						Auction App
					</Typography>
					<Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
						{pages.map((page, i) => (
							<Link to={page.path} className="dropdown-btn">
								<Button
									key={i}
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "white",
										display: "block",
										margin: "unset",
										padding: "12px",
										borderRadius: "5px",
									}}
									className="button"
								>
									{page.title}
								</Button>
							</Link>
						))}
					</Box>

					<Box sx={{flexGrow: 0}}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{mt: "45px"}}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting, i) => (
								<Link to={setting.path} className="dropdown-btn">
									<MenuItem
										key={i}
										onClick={handleCloseUserMenu}
										textAlign="center"
									>
										{setting.title}
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
