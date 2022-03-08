import {BrowserRouter} from "react-router-dom";

import {Navbar} from "./components/Navbar";
import {AppRoutes} from "./AppRoutes";

import "./reset.css";
import "./styles.css";

export const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<AppRoutes />
		</BrowserRouter>
	);
};
