import {useState, useEffect, Fragment} from "react";
import {useParams} from "react-router-dom";

import {useQuery} from "@apollo/client";
import {useSubscription} from "@apollo/client";
import {useAuth} from "../contexts/AppProvider";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import {GET_SINGLE_LISTING} from "../queries";
import {AUCTION_BID_SUBSCRIPTION} from "../subscriptions";
import {PostBidModal} from "./PostBidModal";
import {ListSubheader} from "@mui/material";

export const AuctionPage = () => {
	const {id} = useParams();
	const [currentBid, setCurrentBid] = useState({});
	const [auctionData, setAuctionData] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const {data, error, loading} = useQuery(GET_SINGLE_LISTING, {
		variables: {id},
	});

	const {data: subscriptionData, loading: subscriptionLoading} =
		useSubscription(AUCTION_BID_SUBSCRIPTION, {
			variables: {
				listingId: id,
			},
		});

	const {user} = useAuth();

	useEffect(() => {
		if (data) {
			setAuctionData(data?.getSingleListing?.bids);
			setCurrentBid(data.getSingleListing.currentBid);
		}

		if (subscriptionData) {
			setAuctionData([...auctionData, subscriptionData.auctionBid]);
			setCurrentBid(subscriptionData.auctionBid);
		}
	}, [subscriptionData, data]);

	const handleModalOpen = () => setIsModalOpen(true);
	const handleModalClose = () => setIsModalOpen(false);

	const styles = {
		listingContainer: {
			display: "flex",
			flexWrap: "wrap",
			padding: 3,
			margin: 1,
			mx: "auto",
			width: "75%",
		},
		listingCard: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
			alignItems: "center",
			boxShadow: 4,
			width: "50%",
		},
		listingCardArea: {
			height: 1,
		},
		listingCardContent: {},

		listingCardAction: {
			justifyContent: "center",
			width: 1,
		},
		listingButtons: {
			display: "flex",
			flexDirection: "column",
			width: "40%",
			height: "50px",
		},
		divider: {
			borderColor: "rgb(0 0 0 / 34%)",
		},
		biddingContainer: {
			width: "100%",
			display: "flex",
			flexDirection: "column-reverse",
			alignItems: "center",
			gap: "1rem",
		},
		biddingTitle: {
			textAlign: "center",
			textDecoration: "underline",
			margin: 2,
		},
		biddingCard: {
			width: "50%",
		},
	};

	if (error || loading) return <h1>Error</h1>;

	return (
		data?.getSingleListing && (
			<>
				<Box sx={styles.listingContainer}>
					<Card sx={styles.listingCard}>
						<CardActionArea sx={styles.listingCardArea}>
							<CardMedia
								component="img"
								height="200"
								image="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
								alt="Macbook Air"
							/>
							<CardContent sx={styles.listingCardContent}>
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
					<Card sx={styles.listingCard}>
						<CardContent>
							<Typography gutterBottom variant="h4" component="div">
								Time left: 20 seconds
							</Typography>
							{currentBid && (
								<Typography gutterBottom variant="h6" component="div">
									Current bid: {currentBid?.amount}
								</Typography>
							)}
						</CardContent>
						<CardActions sx={styles.listingCardAction}>
							<Button sx={styles.listingButtons} variant="contained">
								BID £550
							</Button>

							<Button
								sx={styles.listingButtons}
								variant="contained"
								onClick={handleModalOpen}
							>
								CUSTOM BID
							</Button>
							<PostBidModal
								open={isModalOpen}
								onClose={handleModalClose}
								listingId={id}
								currentBid={currentBid}
								startingBid={data.getSingleListing.startingBid}
							/>
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
				<Box sx={styles.biddingContainer}>
					{/* Data on page load */}
					{auctionData &&
						auctionData.map((bid) => (
							<List
								sx={{
									width: "100%",
									maxWidth: 360,
									bgcolor: "background.paper",
								}}
								subheader={<ListSubheader>13:05</ListSubheader>}
							>
								<ListItem sx={{justifyItems: "center", alignItems: "center"}}>
									<ListItemAvatar>
										<Avatar alt={user.username} src={user.imageUrl} />
									</ListItemAvatar>
									<ListItemText
										primary={
											<Fragment>
												<Typography sx={{display: "inline"}} component="span">
													{bid.user.firstName} {bid.user.lastName}
												</Typography>
												{` (${bid.user.username})`}
											</Fragment>
										}
										secondary={
											<Typography variant="body2">
												Placed bid: £{bid.amount}
											</Typography>
										}
									/>
								</ListItem>
							</List>
						))}
				</Box>
			</>
		)
	);
};
