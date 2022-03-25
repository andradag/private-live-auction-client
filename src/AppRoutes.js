import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/";
import { LoginSide } from "./pages/LoginSide";
import { SignUpSide } from "./pages/SignUpSide";
import { AuctionPage } from "./pages/AuctionPage";
import { HouseForm } from "./pages/HouseForm";
import { SecondaryDashboardPage } from "./pages/SecondaryDashboard";
import { HowToBid } from "./pages/HowToBid";
import { useAuth } from "./contexts/AppProvider";

export const AppRoutes = () => {
  const user = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={<SecondaryDashboardPage user={user} />}
      />
      <Route path="/login" element={<LoginSide />} />
      <Route path="/signup" element={<SignUpSide />} />
      <Route path="/auction/:id" element={<AuctionPage user={user} />} />
      <Route path="/how-to-bid" element={<HowToBid />} />
      <Route path="/create-auction" element={<HouseForm user={user} />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
