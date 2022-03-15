import {gql} from "@apollo/client";

export const GET_USER = gql`
	query Query($userId: ID!) {
		getSingleUser(userId: $userId) {
			_id
			username
			firstName
			lastName
			email
			isAdmin
			savedListings {
				_id
				title
				description
				category {
					title
				}
				startingBid
				reserveAmount
				status
			}
		}
	}
`;

export const GET_LISTINGS = gql`
	query Query($status: String, $category: ID) {
		getListings(status: $status, category: $category) {
			_id
			title
			description
			category {
				title
			}
			reserveAmount
			startingBid
			status
		}
	}
`;

export const GET_SINGLE_LISTING = gql`
	query GetSingleListing($id: ID!) {
		getSingleListing(_id: $id) {
			_id
			title
			description
			reserveAmount
			category {
				title
			}
			startingBid
			status
		}
	}
`;

export const CATEGORY = gql`
	query Query {
		getAllCategories {
			_id
			title
		}
	}
`;
