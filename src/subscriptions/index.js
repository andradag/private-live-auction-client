import {gql} from "@apollo/client";

export const AUCTION_BID_SUBSCRIPTION = gql`
	subscription Subscription($listingId: ID!) {
		auctionBid(listingId: $listingId) {
			amount
			user {
				id
				username
			}
		}
	}
`;
