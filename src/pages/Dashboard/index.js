import { useNavigate } from "react-router-dom";

import { useQuery } from "@apollo/client";

import { useAuth } from "../../contexts/AppProvider";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import { GET_USER } from "../../queries";

import { UpcomingAuctions } from "../../components/UpcomingAuctions";
import { LiveAuctions } from "../../components/LiveAuctions";

export const Dashboard = () => {
  const { user } = useAuth();

  // // Get user admin status
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(GET_USER, {
    variables: { userId: user.id },
  });

  const navigate = useNavigate();

  if (userError && !userLoading) return <h1>User error</h1>;

  const createAuction = () => {
    navigate("/create-auction");
  };

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
            <Button onClick={createAuction} size="medium" variant="contained">
              Create auction
            </Button>
          </Stack>
        )}
        {/* If user is normal user will see "Request auction" */}
        {!userData.getSingleUser.isAdmin && (
          <Stack justifycontent="center" alignItems="center" sx={styles.stack}>
            <Button size="medium" variant="contained">
              Request auction
            </Button>
          </Stack>
        )}
        {/* Live Auctions */}
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            component="h1"
            align="center"
            sx={styles.header}
          >
            Live Auctions
          </Typography>
          <Divider />
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
