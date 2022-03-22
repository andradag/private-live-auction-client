import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function HowToBid() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Bidding"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          How To Bid
        </Typography>
        <Typography variant="body2" color="text.secondary">
          At the stated date and time, a live auction will begin when the
          auctioneer opens each lot for bidding at the current bid established
          based on the advance bidding that preceded it. Clients are able to
          participate by bidding online via liveAuction.com. Bids will be
          accepted in the order they are received and the highest bid placed in
          the live auction will win each lot. When competitive bidding subsides,
          the admin can send a fair warning message to indicate that the live
          auction will close imminently.
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          Starting Bids
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A starting bid is set against each lot, which is the lowest possible
          bid you can place on a lot. You may bid at or above the starting bid.
          Please note that leaving a bid at the starting bid may not necessarily
          mean you have met the reserve, though you will be notified if you are
          the leading bidder or have been outbid. Please note that we reserves
          the right to lower the starting bid prior to the start of the live
          auction.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Live Auctions</Button>
      </CardActions>
    </Card>
  );
}
