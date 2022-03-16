import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {CardActionArea, Divider, Paper, Stack, styled} from "@mui/material";
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

	console.log(data, loading);

	const styles = {
		container: {
			display: "flex",
			flexWrap: "wrap",
			padding: 3,
			margin: 1,
			mx: "auto",
		},
		card: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
			alignItems: "center",
			boxShadow: 4,
			width: "50%",
		},
		cardContent: {
			height: 1,
		},
		cardArea: {
			height: 1,
		},
		cardAction: {
			justifyContent: "center",
			width: 1,
		},
		buttons: {
			display: "flex",
			flexDirection: "column",
			width: "40%",
			height: "50px",
		},
		divider: {
			borderColor: "rgb(0 0 0 / 34%)",
		},
		biddingTitle: {
			textAlign: "center",
			textDecoration: "underline",
			margin: 2,
		},
		biddingCard: {
			width: "75%",
		},
	};

	if (error || loading) return <h1>Error</h1>;

	console.log(subscriptionData);

	const Item = styled(Paper)(({theme}) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
		width: "75%",
	}));

	return (
		data && (
			<>
				<Box sx={styles.container}>
					<Card sx={styles.card}>
						<CardActionArea sx={styles.cardArea}>
							<CardMedia
								component="img"
								height="200"
								image="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
								alt="Macbook Air"
							/>
							<CardContent sx={styles.cardContent}>
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

					<Card sx={styles.card}>
						<CardContent>
							<Typography gutterBottom variant="h4" component="div">
								Time left: 20 seconds
							</Typography>
							<Typography gutterBottom variant="h6" component="div">
								Current bid: £500
							</Typography>
						</CardContent>
						<CardActions sx={styles.cardAction}>
							<Button sx={styles.buttons} variant="contained">
								BID £550
							</Button>

							<Button sx={styles.buttons} variant="contained">
								CUSTOM BID
							</Button>
						</CardActions>
					</Card>
				</Box>
				<Divider sx={styles.divider} />
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					sx={styles.biddingTitle}
				>
					Bidding Activity
				</Typography>
				<Box sx={{width: "100%"}}>
					<Stack
						spacing={2}
						sx={{flexDirection: "column-reverse", alignItems: "center"}}
					>
						{data.getSingleListing.bids.map((bid) => (
							<Card sx={styles.biddingCard}>
								<CardContent>
									<Typography variant="h5" component="div">
										{bid.user.firstName} {bid.user.lastName}
									</Typography>
									<Typography sx={{mb: 1.5}} color="text.secondary">
										{bid.user.username}
									</Typography>
									<Typography variant="h6" sx={{textAlign: "center"}}>
										Bid Ammount: £{bid.amount}
									</Typography>
								</CardContent>
							</Card>
						))}
					</Stack>
				</Box>
			</>
		)
	);
};
