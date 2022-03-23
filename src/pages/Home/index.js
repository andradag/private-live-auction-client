import Carousel from "../../components/pages/Home/Carousel";
import Footer from "../../components/pages/Home/Footer";
import Grid from "@mui/material/Grid";

export const Home = () => {
  // Put auction cards here as well
  return (
    <>
      <h1>Home Page</h1>
      <Carousel />
      <Grid>
		<h2>Established in 1744, Sotheby’s is the world’s largest, most trusted and
        dynamic marketplace for art and luxury. We empower our international
        community of collectors and connoisseurs to discover, acquire, finance
        and consign fine art and rare objects. Our reputation for trust and
        authenticity is backed by our unparalleled global network of specialists
        spanning 40 countries and 44 departments, which include Contemporary
        Art, Modern and Impressionist Art, Old Masters, Chinese Works of Art,
        jewelry, watches, wine and spirits, and interiors, among many others.
        Guided by our forward-thinking spirit of innovation, we host over 600
        auctions annually and offer a cross-category selection of items
        available for immediate purchase via both digital and physical shopping
        experiences as well as private sales. </h2>
      <Grid />
      <Footer />
	  </>
  );
};
