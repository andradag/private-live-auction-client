import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMutation, useQuery } from "@apollo/client";
import { SAVELISTING, DELETE_LISTING } from "../mutations";
import { GET_LISTINGS } from "../queries";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../contexts/AppProvider";
import { GET_USER } from "../queries";

import { DeleteListingModal } from "./DeleteListingModal";
import { UpcomingHouseCard } from "./UpcomingHouseCard";

// Will accept "auction" prop which will inclue title, image etc
export const UpcomingHouses = () => {
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

  if (listingError && !listingLoading) {
    return <h1>Error loading listings</h1>;
  }

  if (listingData?.getListings && !listingLoading) {
    return (
      <Grid container justifyContent="center" spacing={3} sx={styles.grid}>
        {listingData.getListings.map((house) => (
          <UpcomingHouseCard house={house} key={house._id} />
        ))}
      </Grid>
    );
  }
  return <h1>No listings</h1>;
};
