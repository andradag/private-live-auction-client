import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Will accept "auction" prop which will inclue title, image etc
export default function UpcomingAuctions() {
  const styles = {
    grid: {
      paddingTop: 3,
      paddingBottom: 3,
    },
  };
  // Example auctions
  const auctions = [
    {
      title: "Audi RS5",
      description: "New 2020 RS5 Black",
      image:
        "https://www.quattrodaily.com/wp-content/uploads/2020/06/Audi-RS5-Carbon-Black-1.jpg",
    },
    {
      title: "Juice",
      description: "Just a glass of Orange Juice",
      image:
        "https://www.collinsdictionary.com/images/thumb/fruitjuice_148446767_250.jpg",
    },
    {
      title: "Macbook Pro",
      description: "New Macbook Pro",
      image:
        "https://i.pcmag.com/imagery/reviews/05POeP7aWhKjIKkZ15YCZa9-21..v1635374572.jpg",
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
              <Button size="small" variant="outlined">
                View
              </Button>
              <Button size="small" variant="contained">
                Register
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
