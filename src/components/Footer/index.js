// import React from "react";
// import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const StickyFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#E08604",
          color: "white",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">Project Name</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};
