import {Route, Routes} from "react-router-dom";

import {Home} from "./components/pages/Home/";
import {Dashboard} from "./components/pages/Dashboard";
import {Login} from "./components/pages/Login";
import {SignUp} from "./components/pages/SignUp";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	);
};
