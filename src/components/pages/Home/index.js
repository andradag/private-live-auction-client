import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

import "./Home.css";

export const Home = () => {
  return (
    <>
      <h1>Home Page</h1>

      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", width: "auto" }}>
        <div class="auction-image">
          <img
            src="https://media.istockphoto.com/photos/legal-computer-judge-concept-cyber-gavel3d-illustration-picture-id520166808?k=20&m=520166808&s=612x612&w=0&h=-os2hoZVTOyhFEr3t4rBTXl_cLBNjmg_VFO6gQ8B3XY="
            height="100%"
            width="100%"
          />
          <div class="auction-text">
            <h1>Live Auction House</h1>
            <p>26 March 2022</p>
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
            >
              Register To Bid
            </Fab>
          </div>
        </div>
      </Box>
    </>
  );
};
