import React from "react";
import { Route, Switch } from "react-router-dom";
import { WithProvider } from "./adapters/graphqlProvider";
import Layout from "./layout/Layout";
import MarketPage from "./pages/market/MarketPage";

const App: React.FunctionComponent = () => {
  return (
    <WithProvider>
      <Layout>
        <Switch>
          <Route
            path="/:categoryId"
            exact={true}
            component={MarketPage}
          ></Route>
        </Switch>
      </Layout>
    </WithProvider>
  );
};

export default App;
