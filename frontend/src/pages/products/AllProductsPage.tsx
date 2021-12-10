import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { withProvider } from "../../adapters/graphqlProvider";

const productsQuery = gql`
  query allProducts {
    products {
      title
      price
    }
  }
`;

const AllProductsPage: React.FunctionComponent = () => {
  const { data, loading, error } = useQuery(productsQuery);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {loading ? "Loading.." : data.products.map((meetup: any) => meetup.title)}
    </div>
  );
};

export default withProvider(AllProductsPage);
