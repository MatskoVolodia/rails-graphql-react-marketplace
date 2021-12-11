import CategoriesList from "../components/menu/CategoriesMenu";
import MainHeader from "./MainHeader";

export interface LayoutProps {
  children: any;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <div>
        <div>
          <CategoriesList />
        </div>
        <div>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
