import AuctionCard from "../../AuctionCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

export const Dashboard = () => {
  const auctions = AuctionCard();
  const styles = {
    header: {
      paddingTop: 2,
      paddingBottom: 2,
      backgroundColor: "#F8F8FF",
      mx: "auto",
      width: 700,
    },

    grid: {
      paddingTop: 3,
      paddingBottom: 3,
    },
  };
  // Query the DB to get the auctions
  // Map the cards below
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          component="h1"
          align="center"
          sx={styles.header}
        >
          Available Auctions
        </Typography>
        <Divider />
        {/* AuctionCard will accept props based on data (auction1/2/3) */}
        {/* Auction data will be mapped accordingly */}
        <Grid container justifyContent="center" spacing={3} sx={styles.grid}>
          {auctions.map((value) => (
            <Grid key={value} item>
              {value}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
