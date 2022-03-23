import {Link} from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useAuth} from "../../../contexts/AppProvider";

const privateRoutes = [
	{id: "home", title: "Home", path: "/"},
	{id: "dashboard", title: "Dashboard", path: "dashboard"},
];

const adminRoutes = [
	{id: "createListing", title: "Create Listing", path: "create-auction"},
];

export const PrivateNavLinks = ({handleLogout}) => {
	const {user} = useAuth();

	return (
		<Box
			sx={{
				flexGrow: 1,
				display: {xs: "none", md: "flex"},
				justifyContent: "flex-end",
			}}
		>
			{privateRoutes.map((page, i) => (
				<Link key={i} to={page.path} className="page-btn">
					<Button
						id={page.id}
						sx={{
							my: 2,
							color: "white",
							display: "block",
							margin: "unset",
							padding: "12px",
							borderRadius: "5px",
						}}
						className="button"
						onClick={handleLogout}
					>
						{page.title}
					</Button>
				</Link>
			))}
			{user?.isAdmin &&
				adminRoutes.map((page, i) => (
					<Link key={i} to={page.path} className="page-btn">
						<Button
							id={page.id}
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
	);
};
