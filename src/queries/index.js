import {gql} from "@apollo/client";

export const DASHBOARD = gql`
	query Query {
		dashboard {
			id
			firstName
			lastName
			username
			email
		}
	}
`;

export const GET_LISTINGS = gql`
	query Query($status: String, $category: ID) {
		getListings(status: $status, category: $category) {
			_id
			title
			description
			category
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
			category
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
