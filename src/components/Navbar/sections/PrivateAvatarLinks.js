import {useState} from "react";
import {Link} from "react-router-dom";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const privateRoutes = [
	{title: "Home", path: "/"},
	{title: "Profile", path: "profile"},
	{title: "Logout", path: "logout"},
];

export const PrivateAvatarLinks = () => {
	const [anchorElUser, setAnchorElUser] = useState(null);

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
				{privateRoutes.map((setting, i) => (
					<Link key={i} to={setting.path} className="dropdown-btn">
						<MenuItem key={i} onClick={handleCloseUserMenu} textAlign="center">
							{setting.title}
						</MenuItem>
					</Link>
				))}
			</Menu>
		</Box>
	);
};
