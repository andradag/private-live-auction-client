import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./LiveAuction.css";
import { GET_LISTINGS, GET_USER } from "../../queries";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AppProvider";

// Will accept "auction" prop which will inclue title, image etc
export const LiveAuctions = () => {
  const { user } = useAuth();

  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(GET_USER, {
    variables: { userId: user.id },
  });

  const {
    data: listingData,
    loading: listingLoading,
    error: listingError,
  } = useQuery(GET_LISTINGS, { variables: { status: "Live" } });

  const styles = {
    grid: {
      paddingTop: 3,
      paddingBottom: 3,
    },
  };

  const navigate = useNavigate();

  const handleJoinAuction = (auctionID) => {
    navigate(`/auction/${auctionID}`);
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
                {/* if user admin, live button should allow toggle */}
                {userData.getSingleUser.isAdmin && (
                  <Button
                    size="small"
                    variant="outlined"
                    className="liveButton"
                    sx={{
                      border: "none",
                      cursor: "default",
                    }}
                  >
                    TOGGLE
                  </Button>
                )}
                {!userData.getSingleUser.isAdmin && (
                  <Button
                    size="small"
                    variant="outlined"
                    className="liveButton"
                    sx={{
                      border: "none",
                      cursor: "default",
                    }}
                  >
                    Live
                  </Button>
                )}

                <Button
                  size="small"
                  variant="contained"
                  onClick={() => handleJoinAuction(auction._id)}
                >
                  Join
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
  return <h1>No Listings</h1>;
};
