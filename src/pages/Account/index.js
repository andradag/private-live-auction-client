import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import {Profile} from "../../components/Account/Profile";
import {ProfileDetails} from "../../components/Account/ProfileDetails";

import {useAuth} from "../../contexts/AppProvider";

const styles = {
	title: {
		marginBottom: "1rem",
	},
};

export const Account = () => {
	const {user, setIsLoggedIn} = useAuth();

	return (
		<>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth="lg">
					<Typography variant="h4" style={styles.title}>
						Account
					</Typography>
					<Grid container spacing={3}>
						<Grid item lg={4} md={6} xs={12}>
							<Profile user={user} />
						</Grid>
						<Grid item lg={8} md={6} xs={12}>
							<ProfileDetails user={user} setIsLoggedIn={setIsLoggedIn} />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};
