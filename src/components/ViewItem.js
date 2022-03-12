import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export const AuctionPage = () => {
	const styles = {
		container: {
			display: "flex",
			flexWrap: "wrap",
			padding: 4,
			mx: "auto",
			width: 700,
			margin: "20px",
		},

		buttons: {
			display: "flex",
			flexDirection: "column",
		},
	};

	return (
		<Box sx={styles.container}>
			<Card sx={{maxWidth: 345}}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
						alt="Macbook Air "
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Macbook Air 2018
						</Typography>
						<Typography gutterBottom variant="h7" component="div">
							Technology
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Brand new Macbook Air, here are the tech specs: 8GB RAM /12GB SSD
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>

			<br />

			<Card sx={{maxWidth: 345}}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Time left: 20 seconds
					</Typography>
					<Typography gutterBottom variant="h7" component="div">
						Current bid: £500
					</Typography>
				</CardContent>
				<CardActions>
					<div sx={styles.buttons}>
						<Button variant="contained">BID £550</Button>
					</div>

					<div>
						<Button variant="contained">CUSTOM BID</Button>
					</div>
				</CardActions>
			</Card>
		</Box>
	);
};
