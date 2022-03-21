import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {useQuery} from "@apollo/client";
import {useSubscription} from "@apollo/client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import {GET_SINGLE_LISTING} from "../../../queries";
import {AUCTION_BID_SUBSCRIPTION} from "../../../subscriptions";

import {BiddingCard} from "../../BiddingCard";
import {ListingItem} from "../../ListingItem";

export const AuctionPage = () => {
	const {id} = useParams();
	const [currentBid, setCurrentBid] = useState({});
	const [auctionData, setAuctionData] = useState([]);

	const {data, error, loading} = useQuery(GET_SINGLE_LISTING, {
		variables: {id},
	});

	const {data: subscriptionData, loading: subscriptionLoading} =
		useSubscription(AUCTION_BID_SUBSCRIPTION, {
			variables: {
				listingId: id,
			},
		});

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

	const styles = {
		divider: {
			borderColor: "rgb(0 0 0 / 34%)",
		},
		biddingTitle: {
			textAlign: "center",
			textDecoration: "underline",
			margin: 2,
		},
		biddingContainer: {
			width: "100%",
			display: "flex",
			flexDirection: "column-reverse",
			alignItems: "center",
			gap: "1rem",
		},
	};

	if (error || loading) return <h1>Error</h1>;

	return (
		data?.getSingleListing && (
			<>
				<ListingItem listingId={id} data={data} currentBid={currentBid} />
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
					<List
						sx={{
							width: "100%",
							maxWidth: 550,
							bgcolor: "background.paper",
							display: "flex",
							flexDirection: "column-reverse",
						}}
						disablePadding
					>
						{/* Data on page load */}
						{auctionData && auctionData.map((bid) => <BiddingCard bid={bid} />)}
					</List>
				</Box>
			</>
		)
	);
};
