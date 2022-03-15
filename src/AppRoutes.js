import {Route, Routes} from "react-router-dom";

import {Home} from "./components/pages/Home/";
import {Dashboard} from "./components/pages/Dashboard";
import {Login} from "./components/pages/Login";
import {SignUp} from "./components/pages/SignUp";
import {AuctionPage} from "./components/AuctionPage";
import {BiddingCard} from "./components/BidddingCard";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/auction/:id" element={<AuctionPage />} />
			<Route path="/listing" element={<BiddingCard />} />
		</Routes>
	);
};
