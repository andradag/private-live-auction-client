import React from "react";
import "./Navbar.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useAuth } from "../../contexts/AppProvider";
import { PrivateRoutes } from "./sections/PrivateRoutes";
import { PublicRoutes } from "./sections/PublicRoutes";
import { PublicHamburgerMenu } from "./sections/PublicHamburgerMenu";

export const Navbar = () => {
  const user = useAuth();
  return (
    <AppBar sx={{ backgroundColor: "#E08604" }} position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            Forbiddin' House
          </Typography>
          {!user.isLoggedIn && <PublicHamburgerMenu />}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Forbiddin' House
          </Typography>
          {!user.isLoggedIn ? <PublicRoutes /> : <PrivateRoutes />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
