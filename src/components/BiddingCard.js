// import {Fragment} from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";

import {useAuth} from "../contexts/AppProvider";

export const BiddingCard = ({bid}) => {
	const {user} = useAuth();
	return (
		<List
			sx={{
				width: "100%",
				maxWidth: 500,
				bgcolor: "background.paper",
			}}
			subheader={
				<ListSubheader
					sx={{
						pl: 3,
					}}
				>
					13:05
				</ListSubheader>
			}
		>
			<ListItem
				sx={{
					justifyItems: "center",
					alignItems: "center",
					p: 0,
					pl: 3,
				}}
			>
				<ListItemAvatar>
					<Avatar alt={user.username} src={user.imageUrl} />
				</ListItemAvatar>
				<ListItemText
					primary={
						<>
							<Typography
								sx={{display: "inline"}}
								component="span"
								variant="h6"
							>
								{bid.user.firstName} {bid.user.lastName}
							</Typography>
							<Typography
								sx={{display: "inline"}}
								component="span"
								variant="body1"
							>
								{` (${bid.user.username})`}
							</Typography>
						</>
					}
					secondary={
						<Typography variant="body1">Placed bid: £{bid.amount}</Typography>
					}
				/>
			</ListItem>
		</List>
	);
};
