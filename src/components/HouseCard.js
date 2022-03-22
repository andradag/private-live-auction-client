import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useAuth } from "../contexts/AppProvider";
import { useNavigate } from "react-router-dom";

export const HouseCard = ({ house }) => {
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleJoinAuction = (id) => {
    navigate(`/auction/${id}`);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        height: 500,
        marginBottom: "20px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ maxWidth: "700px", maxHeight: "1000px" }}
        image={house.images[0]}
      />

      <CardContent sx={{ height: 80, marginBottom: 10 }}>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          textAlign="center"
        >
          {house.title}
        </Typography>

        <Typography sx={{ fontSize: "20px" }}>
          Description: {house.description}
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Property Type: {house.propertyType}
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Amount of Bedrooms: {house.bedrooms}
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Amount of Bathrooms/WC: {house.bathrooms}
        </Typography>
        {/* <Typography sx={{ fontSize: "20px" }}>Status:</Typography> */}
        <Typography sx={{ fontSize: "20px" }}>
          Starting Bid: {house.startingBid}
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Created By: {house.createdBy.username}
        </Typography>

        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        {user.isAdmin && (
          <Button
            size="small"
            variant="outlined"
            className="liveButton"
            sx={{
              border: "none",
              cursor: "default",
            }}
          >
            TOGGLE
          </Button>
        )}
        {!user.isAdmin && (
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
        )}

        <Button
          size="small"
          variant="contained"
          onClick={() => handleJoinAuction(house._id)}
        >
          Join
        </Button>
      </CardActions>
    </Card>
  );
};
