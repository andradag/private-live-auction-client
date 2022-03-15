import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_SINGLE_LISTING} from "../queries";

import {useSubscription} from "@apollo/client";
import {AUCTION_BID_SUBSCRIPTION} from "../subscriptions";

export const AuctionPage = () => {
	const {id} = useParams();

	const {data: subscriptionData, loading: subscriptionLoading} =
		useSubscription(AUCTION_BID_SUBSCRIPTION, {
			variables: {
				listingId: id,
			},
		});

	const {data, error, loading} = useQuery(GET_SINGLE_LISTING, {
		variables: {id},
	});

	console.log(id, data, loading);

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

	if (error || loading) return <h1>Error</h1>;

	console.log(id);
	console.log(subscriptionData);

	return (
		data && (
			<Box sx={styles.container}>
				<Card sx={{maxWidth: 345}}>
					<CardActionArea>
						<CardMedia
							component="img"
							height="140"
							image="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
							alt="Macbook Air"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{data.getSingleListing.title}
							</Typography>
							<Typography gutterBottom variant="h7" component="div">
								{data.getSingleListing.category.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{data.getSingleListing.description}
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
		)
	);
};
