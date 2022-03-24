import Carousel from "../../components/pages/Home/Carousel";
import Footer from "../../components/pages/Home/Footer";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

export const Home = () => {
  // Put auction cards here as well
  return (
    <>
      <h1>Home Page</h1>
      <Carousel />
      <Box>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            height: 500,
            marginBottom: "20px",
            marginLeft: "800px",
            marginRight: "20px",
          }}
        >
          <h4>
            <Typography
              component="div"
              textAlign="center"
              marginLeft="40%"
              marginRight="40%"
            >
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
          </h4>
        </Card>

        <Card
          sx={{
            margin: "15px",
            display: "flex",
            flexDirection: "row",
            height: 500,
            marginBottom: "20px",
            marginRight: "800px",
            marginLeft: "20px",
          }}
        >
          <img
            src="https://images.rics.org/publishedmedia/ihoyjek49pynihgcvp6d/RICS-Professional_Renewal.jpg"
            height="100%"
            width="100%"
            alt=""
          />
        </Card>
      </Box>

      <Footer />
    </>
  );
};
