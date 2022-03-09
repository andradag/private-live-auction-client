import {Route, Routes} from "react-router-dom";

import {Home} from "./components/pages/Home/";
import {Dashboard} from "./components/pages/Dashboard";
import {LoginForm} from "./components/pages/Login";
import {SignUpForm} from "./components/pages/SignUp";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/login" element={<LoginForm />} />
			<Route path="/signup" element={<SignUpForm />} />
		</Routes>
	);
};
