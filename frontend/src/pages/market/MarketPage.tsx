import { gql, useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import CategoriesBreadcrumbs from "../../components/categories/CategoriesBreadcrumbs";
import ProductsList from "../../components/products/ProductsList";

export interface MarketPageParams {
  categoryId: string;
}

const categoryQuery = gql`
  query getCategory($id: ID!) {
    category(id: $id) {
      id
      name
    }
  }
`;

const MarketPage: React.FunctionComponent = () => {
  const { categoryId } = useParams<MarketPageParams>();

  const { data, loading, error } = useQuery(categoryQuery, {
    variables: { id: categoryId },
  });

  if (loading) {
    return <div>Loading..</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Grid md={12} sx={{ padding: "10px" }}>
        <CategoriesBreadcrumbs category={data.category} />
      </Grid>
      <Grid md={12} sx={{ padding: "10px" }}>
        <ProductsList category={data.category} />
      </Grid>
    </>
  );
};

export default MarketPage;
