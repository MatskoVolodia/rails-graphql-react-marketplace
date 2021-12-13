import { Grid } from "@mui/material";
import CategoriesList from "../components/categories/CategoriesMenu";
import MainHeader from "./MainHeader";

export interface LayoutProps {
  children: any;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <MainHeader />
        </Grid>
        <Grid item md={12}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
