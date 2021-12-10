import React from "react";
import { Route, Switch } from "react-router-dom";

import AllProductsPage from "./pages/products/AllProductsPage";

const App: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <AllProductsPage />
      </Route>
    </Switch>
  );
};

export default App;
