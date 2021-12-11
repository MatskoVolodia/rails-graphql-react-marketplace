import React from "react";
import { useParams } from "react-router-dom";
import ProductsList from "../../components/products/ProductsList";

export interface MarketPageParams {
  categoryId: string;
}

const MarketPage: React.FunctionComponent = () => {
  const { categoryId } = useParams<MarketPageParams>();

  return (
    <>
      <ProductsList categoryId={categoryId} />
    </>
  );
};

export default MarketPage;
