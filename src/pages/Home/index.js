import Carousel from "../../components/pages/Home/Carousel";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: "Inspiration, cursive",
  },
});

export const Home = () => {
  // Put auction cards here as well
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography
          sx={{ fontFamily: "Inspiration, cursive" }}
          align="center"
          variant="h2"
          color="black"
          weight="normal"
          boxShadow="5"
          marginTop="10px"
          marginBottom="10px"
        >
          Forbiddin' House
        </Typography>
      </ThemeProvider>

      <Carousel />

      <Typography
        sx={{ fontFamily: "Inspiration, cursive" }}
        align="center"
        variant="h2"
        color="black"
        weight="bold"
        boxShadow="5"
        marginTop="10px"
        marginBottom="10px"
      >
        Auction: Turing cash into assets
      </Typography>

      <Container
        className="gjfj"
        sx={{
          maxWidth: "90%",
          my: 3,
          mx: "auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CardMedia
          sx={{
            height: 540,
            width: 700,
            my: 3,
            boxShadow: "5",
          }}
          image="https://images.rics.org/publishedmedia/ihoyjek49pynihgcvp6d/RICS-Professional_Renewal.jpg"
        />
        <CardContent
          sx={{
            textAlign: "center",
            fontWeight: "medium",
            height: 500,
            my: 3,
            boxShadow: "5",
            width: 700,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ramaraja, serif",
              fontSize: 20,
              my: 2,
            }}
          >
            Established in 1894, Forbiddin' House is the world’s largest, most
            trusted and dynamic marketplace for art and luxury. We empower our
            international community of collectors and connoisseurs to discover,
            acquire, finance and consign fine art and rare objects. Our
            reputation for trust and authenticity is backed by our unparalleled
            global network of specialists spanning 40 countries and 44
            departments, which include Contemporary Art, Modern and
            Impressionist Art, Old Masters, Chinese Works of Art, jewelry,
            watches, wine and spirits, and interiors, among many others. Guided
            by our forward-thinking spirit of innovation, we host over 600
            auctions annually and offer a cross-category selection of items
            available for immediate purchase via both digital and physical
            shopping experiences as well as private sales.{" "}
          </Typography>
        </CardContent>
      </Container>
    </>
  );
};
