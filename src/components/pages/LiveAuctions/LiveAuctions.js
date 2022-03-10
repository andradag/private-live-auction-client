import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./LiveAuction.css";

// Will accept "auction" prop which will inclue title, image etc
export default function LiveAuctions(props) {
  const styles = {
    grid: {
      paddingTop: 3,
      paddingBottom: 3,
    },
  };
  // Example auctions
  const auctions = [
    {
      title: "Gucci Ace Sneakers",
      description:
        "1944 Original Gucci Ace Leather Sneakers worn by the Founder Guccio Gucci",
      image:
        "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1581507905/456230_02JP0_9064_002_100_0000_Light-Mens-Ace-embroidered-sneaker.jpg",
    },
    {
      title: "Rolex Date Just",
      description: "New Rolex Date Just",
      image:
        "https://www.bqwatches.com/wp-content/uploads/2022/01/41962_2.-1-1-1.jpg",
    },
  ];

  return (
    <Grid container justifyContent="center" spacing={3} sx={styles.grid}>
      {auctions.map((auction) => (
        <Grid key={auction} item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="150"
              width="150"
              // Example of prop usage here would be {auction.image}
              image={auction.image}
            />
            <CardContent>
              {/* Title */}
              <Typography gutterBottom variant="h5" component="div">
                {auction.title}
              </Typography>
              {/* Short Description */}
              <Typography variant="body2" color="text.secondary">
                {auction.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                className="liveButton"
                sx={{
                  border: "none",
                  cursor: "default",
                }}
              >
                Live
              </Button>
              <Button size="small" variant="contained">
                Join
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
