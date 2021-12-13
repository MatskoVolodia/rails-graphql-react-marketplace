import { gql, useQuery } from "@apollo/client";
import { Collapse } from "@mui/material";
import React, { useState } from "react";
import { Category } from "../../types";
import ListItemLink from "../shared/ListItemLink";
import CategoriesMenuList from "./CategoriesMenuList";

const subcategoriesQuery = gql`
  query subcategories($parentCategoryId: ID) {
    categories(parentCategoryId: $parentCategoryId) {
      id
      name
    }
  }
`;

export interface CategoryItemProps {
  category: Category;
  level: number;
  onLinkClick: any;
}

const CategoryMenuItem: React.FC<CategoryItemProps> = ({
  category,
  level,
  onLinkClick,
}) => {
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useQuery(subcategoriesQuery, {
    variables: { parentCategoryId: category.id },
  });

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setOpen((prevOpen) => !prevOpen);
  };

  if (loading) {
    return <div>Loading..</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <ListItemLink
        to={`/${category.id}`}
        text={category.name}
        expandable={!!data.categories.length}
        open={open}
        onExpandClick={handleClick}
        onClick={onLinkClick}
      />
      <Collapse component="li" in={open} timeout="auto" unmountOnExit>
        <CategoriesMenuList
          categories={data.categories}
          level={level + 1}
          onLinkClick={onLinkClick}
        />
      </Collapse>
    </>
  );
};

export default CategoryMenuItem;
