import AuctionCards from "../../AuctionCards";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export const Dashboard = () => {
  const styles = {
    header: {
      paddingTop: 2,
      paddingBottom: 2,
      backgroundColor: "#F8F8FF",
      mx: "auto",
      width: 700,
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
        <AuctionCards />
      </Box>
    </>
  );
};
