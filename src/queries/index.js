import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Query($userId: ID!) {
    getSingleUser(userId: $userId) {
      isAdmin
      username
      _id
      firstName
      lastName
      email
      savedListings {
        _id
        description
        title
        category
        reserveAmount
        startingBid
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
