import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMutation, useQuery } from "@apollo/client";
import { SAVELISTING, DELETE_LISTING } from "../../mutations";
import { GET_LISTINGS } from "../../queries";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/AppProvider";
import { GET_USER } from "../../queries";
import { DeleteListingModal } from "../DeleteListingModal";

// Will accept "auction" prop which will include title, image etc
export const UpcomingAuctions = () => {
  const { user } = useAuth();

  // // Get user admin status
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(GET_USER, {
    variables: { userId: user.id },
  });
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalAuctionId, setModalAuctionId] = React.useState(null);

  const [executeSaveListing, { data }] = useMutation(SAVELISTING);

  // Get upcoming listings
  const {
    data: listingData,
    loading: listingLoading,
    error: listingError,
  } = useQuery(GET_LISTINGS, { variables: { status: "Upcoming" } });

  const styles = {
    grid: {
      paddingTop: 3,
      paddingBottom: 3,
    },
  };

  const navigate = useNavigate();

  const viewAuction = (auctionID) => {
    navigate(`/auction/${auctionID}`);
  };

  const saveListing = async (id) => {
    await executeSaveListing({ variables: { input: id } });
  };

  if (listingError && !listingLoading) {
    return <h1>Error loading listings</h1>;
  }

  if (listingData?.getListings && !listingLoading) {
    return (
      <>
        <Grid container justifyContent="center" spacing={3} sx={styles.grid}>
          {listingData.getListings.map((auction) => (
            <Grid key={auction._id} item className="upcomingCard">
              {userData.getSingleUser.isAdmin && (
                <FontAwesomeIcon
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalAuctionId(auction._id);
                  }}
                  icon={faCircleXmark}
                  className="deleteButton"
                />
              )}
              <Card sx={{ width: 345, height: 345 }}>
                <CardMedia
                  component="img"
                  height="50%"
                  // Example of prop usage here would be {auction.image}
                  image={auction.image}
                  sx={{ position: "relative", zIndex: 1 }}
                />

                <CardContent sx={{ height: 80 }}>
                  {/* Title */}
                  <Typography gutterBottom variant="h5" component="div">
                    {auction.title}
                  </Typography>
                  {/* Short Description */}
                  <Typography variant="body2" color="text.secondary">
                    {auction.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => viewAuction(auction._id)}
                    size="small"
                    variant="outlined"
                  >
                    View
                  </Button>
                  {/* If user is admin will se "Create auction" button */}
                  {userData.getSingleUser.isAdmin && (
                    <Button id="12345" size="small" variant="contained">
                      Edit
                    </Button>
                  )}
                  {!userData.getSingleUser.isAdmin && (
                    <Button
                      onClick={() => saveListing(auction._id)}
                      id="12345"
                      size="small"
                      variant="contained"
                    >
                      Register
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <DeleteListingModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          deleteAuctionId={modalAuctionId}
        />
      </>
    );
  }
  return <h1>No listings</h1>;
};
