import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AppProvider } from "./contexts/AppProvider";

import { Navbar } from "./components/Navbar";

import { AppRoutes } from "./AppRoutes.js";
import { BiddingCard } from "./components/BidddingCard";
import { SignUpForm } from "./components/SignUpForm";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_API || "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <BiddingCard />
          <SignUpForm />
          <AppRoutes />
        </BrowserRouter>
      </AppProvider>
    </ApolloProvider>
  );
};
