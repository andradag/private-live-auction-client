import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
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
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/auction/:id" element={<AuctionPage />} />
      <Route path="/how-to-bid" element={<HowToBid />} />
      <Route path="/create-auction" element={<HouseForm />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
