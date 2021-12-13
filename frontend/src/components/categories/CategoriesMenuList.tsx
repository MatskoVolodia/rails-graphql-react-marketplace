import { List } from "@mui/material";
import { Category } from "../../types";
import CategoryMenuItem from "./CategoryMenuItem";

export interface CategoriesMenuListProps {
  categories: [Category];
  level: number;
  onLinkClick: any;
}

const CategoriesMenuList: React.FunctionComponent<CategoriesMenuListProps> = ({
  categories,
  level,
  onLinkClick,
}) => {
  if (!categories.length) return null;
  return (
    <>
      <List
        sx={{
          marginLeft: level,
          paddingTop: 0,
          paddingBottom: 0,
          border: "1px solid rgba(0, 0, 0, .2)",
        }}
      >
        {categories.map((category: Category) => (
          <CategoryMenuItem
            key={category.id}
            category={category}
            level={level}
            onLinkClick={onLinkClick}
          />
        ))}
      </List>
    </>
  );
};

export default CategoriesMenuList;
