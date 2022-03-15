import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import CardMedia from "@mui/material/CardMedia";
import styles from "./Secondary-Dashboard.css";

import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const SecondaryDashboardPage = () => {
  return (
    <>
      <h1>Live Auction</h1>

      <Box sx={{ bgcolor: "#cfe8fc", height: "30vh", width: "auto" }}>
        <div class="auction-image">
          <img
            src="https://sothebys-com.brightspotcdn.com/dims4/default/5479944/2147483647/strip/true/crop/2880x660+0+0/resize/1440x330!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F4a%2Fca%2F0058e35745d0877d192e869fa20c%2F22918200-de222x-karl-part-iii-webbanners-2880x660-02.jpg"
            height="100%"
            width="100%"
          />
          <div class="auction-text">
            <h1>Live Auction House</h1>
            <p>26 March 2022</p>
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
            >
              Register To Bid
            </Fab>
          </div>
        </div>
      </Box>
      <Box>
        <Card sx={{ marginTop: 10, width: 345, height: 345 }}>
          <CardMedia
            component="img"
            height="50%"
            image="https://loveincorporated.blob.core.windows.net/contentimages/gallery/39d5432f-42ac-4851-9003-0233243ecc15-Karl_L_Monaco5.jpg"
          />
          <CardContent sx={{ height: 80 }}>
            {/* Title */}
            <Typography gutterBottom variant="h5" component="div"></Typography>
            {/* Short Description */}
            <Typography variant="body2" color="text.secondary"></Typography>
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

        <Card sx={{ marginTop: 10, width: 345, height: 345 }}>
          <CardMedia
            component="img"
            height="50%"
            image="https://static2.mansionglobal.com/production/media/article-images/fd7410aea10cf82c1b5a8b774168fa3e/large_Villa-Acqualina.jpg"
          />
          <CardContent sx={{ height: 80 }}>
            {/* Title */}
            <Typography gutterBottom variant="h5" component="div"></Typography>
            {/* Short Description */}
            <Typography variant="body2" color="text.secondary"></Typography>
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

        <Card sx={{ marginTop: 10, width: 345, height: 345 }}>
          <CardMedia
            component="img"
            height="50%"
            image="https://media.architecturaldigest.com/photos/5b3264390dcdbf2512f61c9e/3:2/w_3543,h_2362,c_limit/Villa%20Jako(c)%20Engel%20_%20Vo%CC%88lkers_Herbert%20Ohge%20(1).jpg"
          />
          <CardContent sx={{ height: 80 }}>
            {/* Title */}
            <Typography gutterBottom variant="h5" component="div"></Typography>
            {/* Short Description */}
            <Typography variant="body2" color="text.secondary"></Typography>
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

        <Card sx={{ marginTop: 10, width: 345, height: 345 }}>
          <CardMedia
            component="img"
            height="50%"
            image="https://www.theoneatelier.com/wp-content/uploads/2021/11/Karl-Lagerfeld-Sierra-Blanca-Estates_0.jpg"
          />
          <CardContent sx={{ height: 80 }}>
            {/* Title */}
            <Typography gutterBottom variant="h5" component="div"></Typography>
            {/* Short Description */}
            <Typography variant="body2" color="text.secondary"></Typography>
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
      </Box>
    </>
  );
};
