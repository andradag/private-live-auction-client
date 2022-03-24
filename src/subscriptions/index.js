import {gql} from "@apollo/client";

export const AUCTION_BID_SUBSCRIPTION = gql`
	subscription Subscription($listingId: ID!) {
		auctionBid(listingId: $listingId) {
			bid {
				amount
				bidTime
				user {
					id
					username
					firstName
					lastName
				}
			}
			status
		}
	}
`;
