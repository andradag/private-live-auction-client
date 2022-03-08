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
        password
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation AddUser($userInput: UserInput!) {
    addUser(userInput: $userInput) {
      user {
        username
        firstName
        lastName
        email
      }
      token
    }
  }
`;
