import Carousel from "../../components/pages/Home/Carousel";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

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

      <Box>
        <Card sx={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
          <CardMedia
            sx={{
              height: 550,
              width: 700,
              boxShadow: "7",
              marginRight: "60px",
              marginLeft: "100px",
              marginTop: "60px",
              marginBottom: "40px",
            }}
            image="https://images.rics.org/publishedmedia/ihoyjek49pynihgcvp6d/RICS-Professional_Renewal.jpg"
          />

          <CardContent
            sx={{
              // border: "solid",
              textAlign: "center",
              boxShadow: "7",
              fontWeight: "medium",
              height: 500,
              width: 700,
              marginRight: "100px",
              marginLeft: "60px",
              marginTop: "60px",
              marginBottom: "40px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Ramaraja, serif",
                fontSize: 20,
                marginTop: "20px",
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              Established in 1894, Forbiddin' House is the world’s largest, most
              trusted and dynamic marketplace for art and luxury. We empower our
              international community of collectors and connoisseurs to
              discover, acquire, finance and consign fine art and rare objects.
              Our reputation for trust and authenticity is backed by our
              unparalleled global network of specialists spanning 40 countries
              and 44 departments, which include Contemporary Art, Modern and
              Impressionist Art, Old Masters, Chinese Works of Art, jewelry,
              watches, wine and spirits, and interiors, among many others.
              Guided by our forward-thinking spirit of innovation, we host over
              600 auctions annually and offer a cross-category selection of
              items available for immediate purchase via both digital and
              physical shopping experiences as well as private sales.{" "}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
