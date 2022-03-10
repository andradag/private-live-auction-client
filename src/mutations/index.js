import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        _id
        username
        email
      }
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

export const CATEGORY = gql`
  query Query {
    getAllCategories {
      _id
      title
    }
  }
`;

export const CREATELISTING = gql`
  mutation Mutation($listingInput: ListingInput!) {
    addListing(listingInput: $listingInput) {
      title
      description
      startingBid
    }
  }
`;
