import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { OrderListScene } from "scenes/order-list.scene";
import { OrderScene } from "scenes/order.scene";
import { routes } from "./routes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.editOrder()} component={OrderScene} />
        <Route exact path={routes.orders} component={OrderListScene} />
        <Redirect from={routes.root} to={routes.orders} />
      </Switch>
    </Router>
  );
};
