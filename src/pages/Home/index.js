import Carousel from "../../components/pages/Home/Carousel";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

export const Home = () => {
  // Put auction cards here as well
  return (
    <>
      <Typography>
        <h1>Forbiddin' House</h1>
      </Typography>
      <Carousel />

      <Box>
        <Card sx={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
          <CardMedia
            sx={{
              height: 500,
              width: 700,
              marginRight: "30px",
              marginLeft: "20px",
              marginTop: "20px",
            }}
            image="https://images.rics.org/publishedmedia/ihoyjek49pynihgcvp6d/RICS-Professional_Renewal.jpg"
          />

          <CardContent
            sx={{
              border: "solid",
              padding: "20px",
              height: 200,
              width: 800,
              textAlign: "center",
              marginRight: "30px",
              marginLeft: "20px",
              marginTop: "70px",
            }}
          >
            <Typography>
              Established in 1744, Sotheby’s is the world’s largest, most
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
