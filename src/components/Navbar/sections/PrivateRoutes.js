import {PrivateNavLinks} from "./PrivateNavLinks";
import {PrivateAvatarLinks} from "./PrivateAvatarLinks";
import {useAuth} from "../../../contexts/AppProvider";

export const PrivateRoutes = () => {
	const {setIsLoggedIn} = useAuth();

	const handleLogout = (event) => {
		if (event.target.id === "logout") {
			localStorage.clear();
			setIsLoggedIn(false);
		}
	};
	return (
		<>
			<PrivateNavLinks handleLogout={handleLogout} />
			<PrivateAvatarLinks handleLogout={handleLogout} />
		</>
	);
};
