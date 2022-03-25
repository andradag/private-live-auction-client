import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

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
      }}
    >
      <Box
        component="footer"
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
        <Container maxWidth="sm">
          <Typography variant="body1">Project Name</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};
