import {useState} from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import {PostBidModal} from "./PostBidModal";

export const ListingItem = ({listingId, data, currentBid}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

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
	};

	return (
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
				<CardContent sx={{p: 0}}>
					{currentBid && (
						<Typography gutterBottom variant="h4" component="div">
							Current bid: £{currentBid?.amount}
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
						listingId={listingId}
						currentBid={currentBid}
						startingBid={data.getSingleListing.startingBid}
					/>
				</CardActions>
			</Card>
		</Box>
	);
};