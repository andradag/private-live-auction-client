import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
<<<<<<< HEAD
import { BiddingCard } from "../../biddingCard";
=======
import { BiddingCard } from "../../BidddingCard";
>>>>>>> 253b1576e92f22d5fdaddcdac27d469a1dab4dd1

export const Bidding = () => {
  const styles = {
    header: {
      paddingTop: 2,
      paddingBottom: 2,
      backgroundColor: "#F8F8FF",
      mx: "auto",
      width: 700,
    },
  };

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        align="center"
        sx={styles.header}
      >
        Listing Form
      </Typography>
      <Divider />
      <BiddingCard />
    </Box>
  );
};
