import {gql} from "@apollo/client";

export const LOGIN = gql`
	mutation Mutation($loginInput: LoginInput!) {
		login(input: $loginInput) {
			user {
				_id
				username
				firstName
				lastName
				email
			}
			token
		}
	}
`;

export const SIGNUP = gql`
	mutation Mutation($userInput: UserInput!) {
		addUser(userInput: $userInput) {
			token
			user {
				_id
				username
				firstName
				lastName
				email
			}
		}
	}
`;

export const CREATE_LISTING = gql`
	mutation Mutation($listingInput: ListingInput!) {
		addListing(listingInput: $listingInput) {
			title
			description
			startingBid
		}
	}
`;

export const ADD_BID = gql`
	mutation Mutation($input: AddBidInput!) {
		addBid(input: $input) {
			amount
			user
		}
	}
`;
