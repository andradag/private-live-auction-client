import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { PostBidModal } from "./PostBidModal";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_LISTING } from "../queries";
import { useAuth } from "../contexts/AppProvider";

export const ListingItem = ({ listingId, data, currentBid }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const {
  // 	data: listingData,
  // 	loading: listingLoading,
  // 	error: listingError,
  // } = useQuery(GET_SINGLE_LISTING, {variables: {id: listingId}});

  const { user } = useAuth();

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const styles = {
    listingContainer: {
      display: "flex",
      flexWrap: "wrap",
      padding: 3,
      margin: 1,
      mx: "auto",
      width: "100%",
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
      margin: "10px",
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
              {/* {data.getSingleListing.category.title} */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.getSingleListing.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={styles.listingCard}>
        <CardContent
          sx={{ display: "inline-flex", alignItems: "center", p: 0 }}
        >
          {data.getSingleListing.status === "Live" ? (
            <>
              <Typography variant="h6" component="div" sx={{ mr: 2 }}>
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
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              Bidding has not started
            </Typography>
          )}
        </CardContent>
        {data.getSingleListing.status === "Live" && (
          <CardActions sx={styles.listingCardAction}>
            {user.isAdmin ? (
              <Button sx={styles.listingButtons} variant="contained">
                Stop Bidding
              </Button>
            ) : (
              <>
                {" "}
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
            )}
          </CardActions>
        )}
      </Card>
    </Box>
  );
};
