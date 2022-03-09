import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {LoginForm} from "../../LoginForm";

export const Login = () => {
	const styles = {
		header: {
			paddingTop: 2,
			paddingBottom: 2,
			backgroundColor: "#F8F8FF",
			mx: "auto",
			width: 700,
		},
	};

	return (
		<Box>
			<Typography
				variant="h4"
				gutterBottom
				component="h1"
				align="center"
				sx={styles.header}
			>
				Login
			</Typography>
			<Divider />
			<LoginForm />
		</Box>
	);
};
