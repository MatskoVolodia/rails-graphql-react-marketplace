import { gql, useQuery } from "@apollo/client";
import { Category } from "../../types";
import CategoryItem from "./CategoryMenuItem";

const categoriesQuery = gql`
  query firstLevelCategories {
    categories(parentCategoryId: null) {
      id
      name
    }
  }
`;

const CategoriesList: React.FunctionComponent = () => {
  const { data, loading, error } = useQuery(categoriesQuery);

  if (loading) {
    return <div>Loading..</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data.categories.map((category: Category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;
