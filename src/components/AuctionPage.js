import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { useSubscription } from "@apollo/client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider, Paper, Stack, styled } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { GET_SINGLE_LISTING } from "../queries";
import { AUCTION_BID_SUBSCRIPTION } from "../subscriptions";
import { PostBidModal } from "./PostBidModal";

export const AuctionPage = () => {
  const { id } = useParams();
  const [currentBid, setCurrentBid] = useState({});
  const [auctionData, setAuctionData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, error, loading } = useQuery(GET_SINGLE_LISTING, {
    variables: { id },
  });

  const { data: subscriptionData, loading: subscriptionLoading } =
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

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

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

  return (
    data?.getSingleListing && (
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
          <Card sx={styles.card}>
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
            <CardActions sx={styles.cardAction}>
              <Button sx={styles.buttons} variant="contained">
                BID £550
              </Button>

              <Button
                sx={styles.buttons}
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
        <Box sx={{ width: "100%" }}>
          <Stack
            spacing={2}
            sx={{ flexDirection: "column-reverse", alignItems: "center" }}
          >
            {/* Data on page load */}
            {auctionData &&
              auctionData.map((bid) => (
                <Card sx={styles.biddingCard}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {bid.user.firstName} {bid.user.lastName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {bid.user.username}
                    </Typography>
                    <Typography variant="h6" sx={{ textAlign: "center" }}>
                      Bid Amount: £{bid.amount}
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
