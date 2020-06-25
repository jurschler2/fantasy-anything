import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import About from "./About";
import Home from "./Home";
import Register from "./Register";

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => Routes
 *  PARENT: Routes
 *  CHILDREN:
 */

function Routes() {


  return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/privateroutes">
            <PrivateRoutes />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </div>
  );

}

export default Routes;