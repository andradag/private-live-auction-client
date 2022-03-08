import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        firstName
        lastName
        username
        email
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Mutation($input: SignupInput!) {
    signup(input: $input) {
      token
    }
  }
`;
