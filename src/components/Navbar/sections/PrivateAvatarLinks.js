import {useState} from "react";
import {Link} from "react-router-dom";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {useAuth} from "../../../contexts/AppProvider";

const privateRoutes = [
	{id: "home", title: "Home", path: "/"},
	{id: "dashboard", title: "Dashboard", path: "dashboard"},
	{id: "profile", title: "Profile", path: "profile"},
	{id: "logout", title: "Logout", path: "/"},
];

const adminRoutes = [{id: "logout", title: "Logout", path: "logout"}];

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
			{user.isAdmin ? (
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
					{adminRoutes.map((setting, i) => (
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
			) : (
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
					{privateRoutes.map((setting, i) => (
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
			)}
		</Box>
	);
};
