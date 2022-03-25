import {useQuery} from "@apollo/client";

import {UpcomingHouseCard} from "./UpcomingHouseCard";

import {GET_LISTINGS} from "../queries";

// Will accept "auction" prop which will inclue title, image etc
export const UpcomingHouses = () => {
	// Get upcoming listings
	const {
		data: listingData,
		loading: listingLoading,
		error: listingError,
	} = useQuery(GET_LISTINGS, {variables: {status: "Upcoming"}});

	if (listingError && !listingLoading) {
		return <h1>Error loading listings</h1>;
	}

	if (listingData?.getListings && !listingLoading) {
		return listingData.getListings.map((house) => (
			<UpcomingHouseCard house={house} key={house._id} />
		));
	}
	return <h1>No listings</h1>;
};
