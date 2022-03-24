import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LiveAuctions from "../LiveAuctions/LiveAuctions";
import { Link } from "react-router-dom";

export const HowToBid = () => {
  return (
    <Card sx={{ my: 5, ml: 20, mr: 20 }}>
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          How To Bid
        </Typography>
        <Typography variant="body7" color="text.secondary">
          At the stated date and time, a live auction will begin when the
          auctioneer opens each lot for bidding at the current bid established
          based on the advance bidding that preceded it. Clients are able to
          participate by bidding online via liveAuction.com. Bids will be
          accepted in the order they are received and the highest bid placed in
          the live auction will win each lot. When competitive bidding subsides,
          the admin can send a fair warning message to indicate that the live
          auction will close imminently.
        </Typography>
      </CardContent>

      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          Starting Bids
        </Typography>
        <Typography variant="body7" color="text.secondary">
          A starting bid is set against each lot, which is the lowest possible
          bid you can place on a lot. You may bid at or above the starting bid
          (see above for how to place a Maximum Bid). Please note that leaving a
          bid at the starting bid may not necessarily mean you have met the
          reserve, though you will be notified if you are the leading bidder or
          have been outbid. Please note that Sotheby’s reserves the right to
          lower the starting bid prior to the start of the live auction.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          Maximum Bid
        </Typography>
        <Typography variant="body7" color="text.secondary">
          The maximum bid is the highest amount you would like to bid on a lot.
          The bidding platform will automatically place incremental bids on your
          behalf against any competition up to the maximum bid you have placed.
          The bidding platform will execute bids beginning at the lowest
          increment. You can find the Bidding Increment Table on the Place Bid
          screen of any lot. If your maximum bid is outbid, you will be alerted
          via email and a push notification from the Sotheby’s app (if enabled)
          for a chance to increase your bid. For clients who are familiar with
          our traditional auctions, a maximum bid functions similarly to an
          absentee bid. Though you can always return to the sale and increase
          your bid, we encourage you to take advantage of the maximum bid
          feature in the event you are unable to return to your desired lot when
          the live sale begins. Please note that if two clients enter the same
          maximum bid, the bid which was entered first will have priority.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          Reserve Amount
        </Typography>
        <Typography variant="body7" color="text.secondary">
          A reserve amount is the minimum amount that a seller will accept as
          the winning bid.
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button onClick={LiveAuctions} size="medium" variant="contained">
          View Live Auctions
        </Button> */}
        <Button
          component={Link}
          to="/LiveAuctions"
          size="medium"
          variant="contained"
        >
          View Live Auctions
        </Button>
      </CardActions>
    </Card>
  );
};
