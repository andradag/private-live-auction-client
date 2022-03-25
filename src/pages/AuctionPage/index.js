import "./AuctionPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { useSubscription } from "@apollo/client";

import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AppProvider";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import { GET_SINGLE_LISTING } from "../../queries";
import { AUCTION_BID_SUBSCRIPTION } from "../../subscriptions";

import { BiddingCard } from "../../components/BiddingCard";
import { ListingItem } from "../../components/ListingItem";
import { Container, ImageList, ImageListItem } from "@mui/material";

export const AuctionPage = ({ user }) => {
  const { id } = useParams();
  const [currentBid, setCurrentBid] = useState({});
  const [status, setStatus] = useState("Upcoming");
  const [auctionData, setAuctionData] = useState([]);

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
      setCurrentBid(data?.getSingleListing?.currentBid);
      setStatus(data?.getSingleListing?.status);
    }

    if (subscriptionData) {
      console.log("subscription effect");
      console.log(subscriptionData);
      setAuctionData([...auctionData, subscriptionData?.auctionBid?.bid]);
      setCurrentBid(subscriptionData?.auctionBid?.bid);
      setStatus(subscriptionData?.auctionBid?.status);
    }
  }, [subscriptionData, data]);

  const styles = {
    container: {},
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
    imagesContainer: {
      display: "flex",
      height: 450,
      maxWidth: 1000,
      overflowY: "scroll",
      flexWrap: "wrap",
      padding: 3,
      marginBottom: 3,
      mx: "auto",
      justifyContent: "center",
      backgroundColor: "white",
      boxShadow: 4,
      borderRadius: "10px",
    },
  };

  if (error || loading) return <h1>Error</h1>;

  if (!user.isLoggedIn) {
    console.log("not logged in");
    return <Navigate to="/signup" replace />;
  } else {
    return (
      data?.getSingleListing && (
        <>
          <Box className="page-container">
            <Box className="listing-container">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={styles.biddingTitle}
              >
                Listing Details
              </Typography>
              <ListingItem
                listingId={id}
                data={data}
                currentBid={currentBid}
                status={status}
              />
              <Divider />
              <Typography sx={styles.biddingTitle} variant="h5">
                Images
              </Typography>
              <Box sx={styles.imagesContainer}>
                <ImageList cols={2} gap={10}>
                  {data.getSingleListing.images.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item}?w=248&fit=crop&auto=format`}
                        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </Box>
            {/* <Divider sx={styles.divider} /> */}
            <Box className="bidding-container">
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
                    borderRadius: 2,
                    boxShadow: 4,
                  }}
                  disablePadding
                >
                  {auctionData &&
                    auctionData.map((bid) => (
                      <BiddingCard bid={bid} sx={{ marginBottom: 2 }} />
                    ))}
                </List>
              </Box>
            </Box>
          </Box>
        </>
      )
    );
  }
};
