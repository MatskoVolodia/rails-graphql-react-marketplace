import { gql, useQuery } from "@apollo/client";
import { Category, Product } from "../../types";
import ProductItem from "./ProductItem";

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
  categoryId?: any;
}

const ProductsList: React.FC<ProductsListProps> = ({ categoryId }) => {
  const { data, loading, error } = useQuery(productsQuery, {
    variables: { categoryId: categoryId },
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {loading
        ? "Loading.."
        : data.products.map((product: Product) => (
            <ProductItem key={product.id} product={product} />
          ))}
    </div>
  );
};

export default ProductsList;
