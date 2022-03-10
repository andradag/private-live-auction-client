import { gql } from "@apollo/client";

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