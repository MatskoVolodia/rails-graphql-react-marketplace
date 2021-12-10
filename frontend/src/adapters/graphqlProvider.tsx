import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const apiFetch = async (_uri: any, options: RequestInit) => {
  options.credentials = "include";

  // super-dirty, extract to env
  let endpointUrl = "http://localhost:3000/graphql";

  return fetch(endpointUrl, options);
};

const client = new ApolloClient({
  link: new HttpLink({
    credentials: "omit",
    fetch: apiFetch,
    fetchOptions: {
      method: "POST",
      mode: "cors",
    },
  }),
  cache: new InMemoryCache(),
});

export const withProvider =
  (WrappedComponent: React.ComponentType, props: any = {}) =>
  () => {
    return (
      <ApolloProvider client={client}>
        <WrappedComponent {...props} />
      </ApolloProvider>
    );
  };
