import { Link } from "react-router-dom";
import { Category } from "../../types";

export interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <div>
      <Link to={`/${category.id}`}>{category.name}</Link>
    </div>
  );
};

export default CategoryItem;
