import Grid from "@mui/material/Grid";
import { GET_LISTINGS } from "../queries";
import { useQuery } from "@apollo/client";
import { HouseCard } from "./HouseCard";

// Will accept "auction" prop which will include title, image etc
export const LiveHouses = () => {
  const {
    data: listingData,
    loading: listingLoading,
    error: listingError,
  } = useQuery(GET_LISTINGS, { variables: { status: "Live" } });
  console.log(listingError);
  const styles = {
    grid: {
      paddingTop: 3,
      paddingBottom: 3,
    },
  };

  if (listingError && !listingLoading) {
    return <h1>Error loading listings</h1>;
  }

  if (listingData?.getListings && !listingLoading) {
    return (
      <Grid container justifyContent="center" spacing={3} sx={styles.grid}>
        {listingData.getListings.map((house) => (
          <HouseCard house={house} key={house._id} />
        ))}
      </Grid>
    );
  }
  return <h1>No Listings</h1>;
};
