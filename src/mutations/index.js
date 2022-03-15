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
				isAdmin
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

export const SAVELISTING = gql`
	mutation Mutation($input: ID!) {
		saveAListing(input: $input) {
			firstName
			lastName
			savedListings {
				_id
				title
			}
		}
	}
`;
