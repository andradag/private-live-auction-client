import {useState} from "react";
import {Link} from "react-router-dom";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {useAuth} from "../../../contexts/AppProvider";

const privateRoutesXs = [
	{id: "home", title: "Home", path: "/"},
	{id: "dashboard", title: "Dashboard", path: "dashboard"},
	{id: "profile", title: "Profile", path: "profile"},
	{id: "logout", title: "Logout", path: "/"},
];

const privateRoutesMd = [{id: "logout", title: "Logout", path: "/"}];

const adminRoutesXs = [
	{id: "home", title: "Home", path: "/"},
	{id: "dashboard", title: "Dashboard", path: "dashboard"},
	{id: "createListing", title: "Create Listing", path: "create-auction"},
	{id: "logout", title: "Logout", path: "/"},
];
const adminRoutesMd = [{id: "logout", title: "Logout", path: "/"}];

export const PrivateAvatarLinks = ({handleLogout}) => {
	const [anchorElUser, setAnchorElUser] = useState(null);

	const {user} = useAuth();

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<Box sx={{flexGrow: 0}}>
			<Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
					<Avatar alt={user?.firstName} src={user?.imageUrl} />
				</IconButton>
			</Tooltip>
			{user?.isAdmin ? (
				<>
					<Menu
						sx={{mt: "45px", display: {xs: "none", md: "flex"}}}
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
						{adminRoutesMd.map((setting, i) => (
							<Link
								key={i}
								to={setting.path}
								className="dropdown-btn"
								onClick={handleCloseUserMenu}
							>
								<MenuItem
									id={setting.id}
									onClick={handleLogout}
									textAlign="center"
								>
									{setting.title}
								</MenuItem>
							</Link>
						))}
					</Menu>
					<Menu
						sx={{mt: "45px", display: {xs: "flex", md: "none"}}}
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
						{adminRoutesXs.map((setting, i) => (
							<Link
								key={i}
								to={setting.path}
								className="dropdown-btn"
								onClick={handleCloseUserMenu}
							>
								<MenuItem
									id={setting.id}
									onClick={handleLogout}
									textAlign="center"
								>
									{setting.title}
								</MenuItem>
							</Link>
						))}
					</Menu>
				</>
			) : (
				<>
					<Menu
						sx={{mt: "45px", display: {xs: "none", md: "flex"}}}
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
						{privateRoutesMd.map((setting, i) => (
							<Link
								key={i}
								to={setting.path}
								className="dropdown-btn"
								onClick={handleCloseUserMenu}
							>
								<MenuItem
									id={setting.id}
									onClick={handleLogout}
									textAlign="center"
								>
									{setting.title}
								</MenuItem>
							</Link>
						))}
					</Menu>
					<Menu
						sx={{mt: "45px", display: {xs: "flex", md: "none"}}}
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
						{privateRoutesXs.map((setting, i) => (
							<Link
								key={i}
								to={setting.path}
								className="dropdown-btn"
								onClick={handleCloseUserMenu}
							>
								<MenuItem
									id={setting.id}
									onClick={handleLogout}
									textAlign="center"
								>
									{setting.title}
								</MenuItem>
							</Link>
						))}
					</Menu>
				</>
			)}
		</Box>
	);
};
