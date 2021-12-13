import { gql, useQuery } from "@apollo/client";
import { Category, Product } from "../../types";
import CategoriesBreadcrumbs from "../categories/CategoriesBreadcrumbs";
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

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {loading
        ? "Loading.."
        : data.products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
};

export default ProductsList;
