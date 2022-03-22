import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";

import "./SecondaryDashboard.css";

import { LiveHouses } from "../../components/LiveHouses";

import { UpcomingHouses } from "../../components/UpcomingHouses";
import { Box } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const SecondaryDashboardPage = () => {
  return (
    <>
      <Box sx={{ margin: "15px" }}>
        <div class="auction-image">
          <img
            src="https://sothebys-com.brightspotcdn.com/dims4/default/5479944/2147483647/strip/true/crop/2880x660+0+0/resize/1440x330!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F4a%2Fca%2F0058e35745d0877d192e869fa20c%2F22918200-de222x-karl-part-iii-webbanners-2880x660-02.jpg"
            height="100%"
            width="100%"
            alt=""
          />

          <div class="auction-text">
            <h1>KARL LAGERFELD</h1>
            <h1>Live Auction House</h1>
            <p>26 March 2022</p>

            <Fab
              sx={{ backgroundColor: "#E08604" }}
              variant="extended"
              size="medium"
              aria-label="add"
              text="strong"
            >
              Register To Bid
            </Fab>
          </div>
        </div>
      </Box>

      <Box>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "space-around",
              border: "solid",
              marginLeft: "50px",
              backgroundColor: "white",
            }}
          >
            <Item>
              <LiveHouses />
              <UpcomingHouses />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
