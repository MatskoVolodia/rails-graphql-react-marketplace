import { gql, useQuery } from "@apollo/client";
import { IconButton, SwipeableDrawer } from "@mui/material";
import CategoriesMenuList from "./CategoriesMenuList";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

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

  const [open, setOpen] = useState(false);

  if (loading) {
    return <div>Loading..</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  const toggleDrawer = (value: boolean) => () => setOpen(value);

  return (
    <>
      <IconButton size="large" onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="inherit" />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <CategoriesMenuList
          categories={data.categories}
          level={0}
          onLinkClick={toggleDrawer(false)}
        />
      </SwipeableDrawer>
    </>
  );
};

export default CategoriesList;
