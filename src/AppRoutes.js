<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Dashboard } from "./components/pages/Dashboard";
import { Login } from "./components/pages/Login";
import { SignUp } from "./components/pages/SignUp";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
=======
import {Route, Routes} from "react-router-dom";

import {Home} from "./pages/Home/";
import {Dashboard} from "./pages/Dashboard";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";
import {AuctionPage} from "./pages/AuctionPage";
import {CreateAuctionForm} from "./pages/CreateAuction";
import {SecondaryDashboardPage} from "./pages/SecondaryDashboard";
import {HowToBid} from "./pages/HowToBid";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
			{/* <Route path="/dashboard" element={<SecondaryDashboardPage />} /> */}
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/auction/:id" element={<AuctionPage />} />
			<Route path="/how-to-bid" element={<HowToBid />} />
			<Route path="/create-auction" element={<CreateAuctionForm />} />
			<Route path="*" element={<Home />} />
		</Routes>
	);
>>>>>>> main
};
