import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export const FooterStyling = () => {
  return (
    <footer>
      <Box
        sx={{
          border: "solid",
          color: "#E08604",
          padding: "10px",
          marginTop: "15px",
          alignContent: "center",
          left: 0,
          bottom: 1,
          right: 0,
        }}
      >
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={6}>
              <Box sx={{ marginTop: "20px", fontSize: "23px" }}>
                2022 © Project name
              </Box>
            </Grid>

            <Grid
              sx={{ marginTop: "15px", fontSize: "20px" }}
              item
              xs={12}
              sm={3}
            ></Grid>

            <Grid
              sx={{ marginTop: "25px", fontSize: "30px" }}
              item
              xs={12}
              sm={3}
            >
              <Box borderBottom={1}>PROFILE</Box>
              <Box>
                <Link href="http://localhost:3000/login" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Logout
                </Link>
              </Box>

              <Box>
                <Link href="http://localhost:3000/signup" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};
