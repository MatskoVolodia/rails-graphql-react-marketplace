import { gql, useQuery } from "@apollo/client";
import { withProvider } from "../../adapters/graphqlProvider";
import { Product } from "../../types";
import ProductItem from "./ProductItem";

const productsQuery = gql`
  query allProducts {
    products {
      title
      price
    }
  }
`;

const ProductsList: React.FunctionComponent = () => {
  const { data, loading, error } = useQuery(productsQuery);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {loading
        ? "Loading.."
        : data.products.map((product: Product) => (
            <ProductItem product={product} />
          ))}
    </div>
  );
};

export default withProvider(ProductsList);
