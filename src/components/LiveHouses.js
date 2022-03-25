import {useQuery} from "@apollo/client";

import {HouseCard} from "./HouseCard";

import {GET_LISTINGS} from "../queries";

// Will accept "auction" prop which will include title, image etc
export const LiveHouses = () => {
	const {
		data: listingData,
		loading: listingLoading,
		error: listingError,
	} = useQuery(GET_LISTINGS, {variables: {status: "Live"}});
	console.log(listingError);

	if (listingError && !listingLoading) {
		return <h1>Error loading listings</h1>;
	}

	if (listingData?.getListings && !listingLoading) {
		return listingData.getListings.map((house) => (
			<HouseCard house={house} key={house._id} />
		));
	}
	return <h1>No Listings</h1>;
};
