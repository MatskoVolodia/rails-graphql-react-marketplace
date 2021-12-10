import { Product } from "../../types";

export interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <h4>{product.price}</h4>
    </div>
  );
};

export default ProductItem;
