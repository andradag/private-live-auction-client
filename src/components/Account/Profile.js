import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export const Profile = ({user}) => (
	<Card>
		<CardContent>
			<Box
				sx={{
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Avatar
					src={user.imageUrl}
					sx={{
						height: 64,
						mb: 2,
						width: 64,
					}}
				/>
				<Typography color="textPrimary" gutterBottom variant="h5">
					{user.firstName} {user.lastName}
				</Typography>
				<Typography color="textSecondary" variant="body2">
					{user.username}
				</Typography>
			</Box>
		</CardContent>
		<Divider />
		<CardActions>
			<Button color="primary" fullWidth variant="text">
				Upload picture
			</Button>
		</CardActions>
	</Card>
);
