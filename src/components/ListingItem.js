import {useState} from "react";

import {useMutation} from "@apollo/client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import {PostBidModal} from "./PostBidModal";

import {useAuth} from "../contexts/AppProvider";

import {CONTROL_LISTING} from "../mutations";

export const ListingItem = ({listingId, data, currentBid, status}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [executeControlListing] = useMutation(CONTROL_LISTING);

	const {user} = useAuth();

	const handleControlListing = async (status) => {
		const {data} = await executeControlListing({
			variables: {
				input: {
					listingId,
					status,
				},
			},
		});
		console.log(data);
	};

	const handleModalOpen = () => setIsModalOpen(true);
	const handleModalClose = () => setIsModalOpen(false);

	const styles = {
		listingContainer: {
			display: "flex",
			flexWrap: "wrap",
			mx: "auto",
			justifyContent: "center",
		},

		listingCard: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			boxShadow: 4,
			width: 500,
			gap: "1rem",
			borderRadius: "10px",
			marginBottom: "10px",
			padding: "10px",
		},

		listingCardArea: {
			height: 1,
		},

		listingCardAction: {
			justifyContent: "center",
			width: 1,
		},

		listingButtons: {
			display: "flex",
			flexDirection: "column",
			width: "150px",
			height: "50px",
			borderRadius: "10px",
			backgroundColor: "#045EE0",
		},
	};

	console.log("status", status);

	return (
		<Box sx={styles.listingContainer}>
			<Card sx={styles.listingCard}>
				<CardActionArea sx={styles.listingCardArea}>
					<CardMedia
						component="img"
						height="300"
						image={data.getSingleListing.images[0]}
						alt="Macbook Air"
					/>
					<CardContent sx={styles.listingCardContent}>
						<Typography gutterBottom variant="h5" component="div">
							{data.getSingleListing.title}
						</Typography>
						<Typography gutterBottom variant="h7" component="div">
							{/* {data.getSingleListing.category.title} */}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{data.getSingleListing.description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<Card sx={styles.listingCard}>
				<CardContent sx={{display: "inline-flex", alignItems: "center", p: 0}}>
					{status === "Live" ? (
						<>
							<Typography variant="h6" component="div" sx={{mr: 2, p: 2}}>
								Current bid:
							</Typography>
							{!currentBid ? (
								<Typography variant="h6" component="div">
									No Bids
								</Typography>
							) : (
								<Typography variant="h5" component="div">
									£{currentBid?.amount}
								</Typography>
							)}
						</>
					) : (
						<Typography variant="h6" component="div" sx={{mr: 2}}>
							Bidding has not started
						</Typography>
					)}
					{user.isAdmin && (
						<Button
							sx={styles.listingButtons}
							variant="contained"
							onClick={() => handleControlListing("Live")}
						>
							Start Bidding
						</Button>
					)}
				</CardContent>
				{status === "Live" && (
					<CardActions sx={styles.listingCardAction}>
						{user.isAdmin ? (
							<Button
								sx={styles.listingButtons}
								variant="contained"
								onClick={() => handleControlListing("Ended")}
							>
								Stop Bidding
							</Button>
						) : (
							status === "Live" && (
								<>
									<Button
										sx={styles.listingButtons}
										variant="contained"
										onClick={handleModalOpen}
									>
										Place A Bid
									</Button>
									<PostBidModal
										open={isModalOpen}
										onClose={handleModalClose}
										listingId={listingId}
										currentBid={currentBid}
										startingBid={data.getSingleListing.startingBid}
									/>
								</>
							)
						)}
					</CardActions>
				)}
			</Card>
		</Box>
	);
};
