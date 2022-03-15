import {Link} from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const publicRoutes = [
	{title: "Home", path: "/"},
	{title: "Login", path: "/login"},
	{title: "Signup", path: "/signup"},
];

export const PublicRoutes = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				display: {xs: "none", md: "flex"},
				justifyContent: "flex-end",
			}}
		>
			{publicRoutes.map((page, i) => (
				<Link key={i} to={page.path} className="page-btn">
					<Button
						key={i}
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
