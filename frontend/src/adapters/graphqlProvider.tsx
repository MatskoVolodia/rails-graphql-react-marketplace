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

export interface WithProviderProps {
  children: any;
}

export const WithProvider: React.FC<WithProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
