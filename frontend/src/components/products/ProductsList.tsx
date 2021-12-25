import { gql, useQuery } from "@apollo/client";
import { Container, Grid, Stack } from "@mui/material";
import { useState } from "react";
import { Category, Product } from "../../types";
import CategoriesBreadcrumbs from "../categories/CategoriesBreadcrumbs";
import CreateProductCard from "./CreateProductCard";
import PendingProductCard from "./PendingProductCard";
import ProductCard from "./ProductCard";

const productsQuery = gql`
  query getProducts($categoryId: ID) {
    products(categoryId: $categoryId) {
      id
      title
      price
    }
  }
`;

export interface ProductsListProps {
  category: Category;
}

const ProductsList: React.FC<ProductsListProps> = ({ category }) => {
  const { data, loading, error } = useQuery(productsQuery, {
    variables: { categoryId: category.id },
  });

  const [pendingProduct, setPendingProduct] = useState(false);

  const createProductHandler = () => {
    setPendingProduct(true);
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <Stack spacing={2} direction="row">
      {data.products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {pendingProduct && <PendingProductCard />}
      <CreateProductCard
        category={category}
        createProductHandler={createProductHandler}
      />
    </Stack>
  );
};

export default ProductsList;
