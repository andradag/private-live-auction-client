import {Route, Routes} from "react-router-dom";

import {Home} from "./pages/Home/";
import {Dashboard} from "./pages/Dashboard";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";
import {AuctionPage} from "./pages/AuctionPage";
import {CreateAuctionForm} from "./pages/CreateAuction";
import {SecondaryDashboardPage} from "./components/pages/SecondaryDashboard";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{/* <Route path="/dashboard" element={<Dashboard />} /> */}
			<Route path="/dashboard" element={<SecondaryDashboardPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/auction/:id" element={<AuctionPage />} />
			<Route path="/create-auction" element={<CreateAuctionForm />} />
			<Route path="*" element={<Home />} />
		</Routes>
	);
};
