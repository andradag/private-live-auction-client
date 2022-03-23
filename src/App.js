import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { AppProvider } from "./contexts/AppProvider";

import { Navbar } from "./components/Navbar";
import { FooterStyling } from "./components/Footer";
import { SignUp } from "./pages/SignUp";

// import { AppRoutes } from "./AppRoutes.js";

import "./reset.css";
import "./styles.css";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_API || "http://localhost:4000/graphql",
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/graphql",
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <SignUp />
          {/* <AppRoutes /> */}
          <FooterStyling />
        </BrowserRouter>
      </AppProvider>
    </ApolloProvider>
  );
};
