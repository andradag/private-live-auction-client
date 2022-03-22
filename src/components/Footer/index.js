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
          backgroundColor: "black",
          border: "solid",
          color: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "flex-end",
          borderRadius: "25px",
          marginTop: "10px",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item sm={3}>
              <Box sx={{ marginTop: "25px", fontSize: "23px" }}>
                Project name © 2022
              </Box>
            </Grid>

            <Grid
              sx={{ marginTop: "25px", fontSize: "20px" }}
              item
              xs={12}
              sm={2}
            >
              <Box borderBottom={1}>CONTACTS</Box>
              <Box>
                <Link href="/" color="inherit">
                  Phone
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Email
                </Link>
              </Box>

              <Box>
                <Link href="/" color="inherit">
                  LinkedIn
                </Link>
              </Box>
            </Grid>

            <Grid
              sx={{ marginTop: "25px", fontSize: "20px" }}
              item
              xs={12}
              sm={2}
            >
              <Box borderBottom={1}>PROFILE</Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Logout
                </Link>
              </Box>

              <Box>
                <Link href="/" color="inherit">
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
