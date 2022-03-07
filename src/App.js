import {Route, Routes} from "react-router-dom";

import {Home} from "./pages/Home";
import {Dashboard} from "./pages/Dashboard";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";

import "./reset.css";
import "./styles.css";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</>
	);
};
