import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import {SignUpForm} from "../../SignUpForm";

export const SignUp = () => {
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
		<Box sx={styles.container}>
			<Typography
				variant="h4"
				gutterBottom
				component="h1"
				align="center"
				sx={styles.header}
			>
				Signup Form
			</Typography>

			<Typography variant="h6" gutterBottom component="h1" align="center">
				Create an account
			</Typography>

			<Divider />
			<SignUpForm />
		</Box>
	);
};
