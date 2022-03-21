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

export const GET_USER = gql`
	query Query($userId: ID!) {
		getSingleUser(userId: $userId) {
			id
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
				_id
				title
			}
			reserveAmount
			startingBid
			status
		}
	}
`;

export const GET_SINGLE_LISTING = gql`
  query Query($id: ID!) {
    getSingleListing(_id: $id) {
      _id
      title
      description
      category {
        _id
        title
      }
      reserveAmount
      startingBid
      status
      bids {
        amount
        # listingId
        user {
          firstName
          lastName
          username
        }
      }
      currentBid {
        amount
        # listingId
        user {
          firstName
          lastName
          username
        }
      }
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
