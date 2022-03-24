import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/";
import { Dashboard } from "./pages/Dashboard";
import { LoginSide } from "./pages/LoginSide";
import { SignUpSide } from "./pages/SignUpSide";
import { AuctionPage } from "./pages/AuctionPage";
import { HouseForm } from "./pages/HouseForm";
import { SecondaryDashboardPage } from "./pages/SecondaryDashboard";
import { HowToBid } from "./pages/HowToBid";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/dashboard" element={<SecondaryDashboardPage />} /> */}
      <Route path="/login" element={<LoginSide />} />
      <Route path="/signup" element={<SignUpSide />} />
      <Route path="/auction/:id" element={<AuctionPage />} />
      <Route path="/how-to-bid" element={<HowToBid />} />
      <Route path="/create-auction" element={<HouseForm />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
