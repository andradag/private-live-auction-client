import UpcomingAuctions from "../../UpcomingAuctions";
import LiveAuctions from "../LiveAuctions/LiveAuctions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useAuth } from "../../../contexts/AppProvider";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../../queries";
import { Stack } from "@mui/material";

export const Dashboard = () => {
  const { user } = useAuth();

  // Get user admin status
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(GET_USER, {
    variables: { userId: user._id },
  });

  if (userError && !userLoading) return console.log("User error");

  const styles = {
    header: {
      paddingTop: 2,
      paddingBottom: 2,
      mx: "auto",
    },
    stack: {
      paddingTop: 2,
      paddingBottom: 2,
      width: 1,
    },
  };
  // Query the DB to get the auctions
  // Map the cards below
  if (userData?.getSingleUser && !userLoading) {
    return (
      <>
        {/* If user is admin will se "Create auction" button */}
        {userData.getSingleUser.isAdmin && (
          <Stack justifycontent="center" alignItems="center" sx={styles.stack}>
            <Button size="medium" variant="contained">
              Create auction
            </Button>
          </Stack>
        )}
        {/* If user is normal user will see "Request auction" */}
        {userData.getSingleUser.isAdmin == false && (
          <Stack justifycontent="center" alignItems="center" sx={styles.stack}>
            <Button size="medium" variant="contained">
              Request auction
            </Button>
          </Stack>
        )}
        {/* Live Auctions */}
        <Box>
          <LiveAuctions />
        </Box>

        {/* Upcoming Auctions */}
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            component="h1"
            align="center"
            sx={styles.header}
          >
            Upcoming Auctions
          </Typography>
          <Divider />
          <UpcomingAuctions />
        </Box>
      </>
    );
  } else {
    return <Box></Box>;
  }
};
