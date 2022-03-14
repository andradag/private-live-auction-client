import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMutation, useQuery } from "@apollo/client";
import { SAVELISTING } from "../mutations";
import { GET_LISTINGS } from "../queries";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Will accept "auction" prop which will inclue title, image etc
export default function UpcomingAuctions() {
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

  const saveListing = async (id) => {
    await executeSaveListing({ variables: { input: id } });
  };

  if (listingError && !listingLoading) {
    return <h1>Error loading listings</h1>;
  }

  if (listingData?.getListings && !listingLoading) {
    return (
      <Grid container justifyContent="center" spacing={3} sx={styles.grid}>
        {listingData.getListings.map((auction) => (
          <Grid key={auction} item>
            <Card sx={{ width: 345, height: 345 }}>
              {/* <FontAwesomeIcon icon="fa-solid fa-pen" /> */}
              <CardMedia
                component="img"
                height="50%"
                // Example of prop usage here would be {auction.image}
                image={auction.image}
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
                <Button size="small" variant="outlined">
                  View
                </Button>
                <Button
                  onClick={() => saveListing("622a4fb33c448a8fc2d1bd3b")}
                  id="12345"
                  size="small"
                  variant="contained"
                >
                  Register
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
  return <h1>No listings</h1>;
}
