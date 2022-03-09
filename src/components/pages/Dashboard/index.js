import AuctionCard from "../../AuctionCard";

export const Dashboard = () => {
  // Query the DB to get the auctions
  // Map the cards below
  return (
    <>
      <h1>Dashboard Page</h1>
      {/* AuctionCard will accept props based on data (auction1/2/3) */}
      {/* Auction data will be mapped accordingly */}
      {/* Put in a grid container */}
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
    </>
  );
};
