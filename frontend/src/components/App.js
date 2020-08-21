import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink, useHistory } from "react-router-dom";
import UserCredentials from "./User";
import Dashboard from "./Dashboard";
import HomePage from "./HomePage";
import auth from "../utils/auth";
import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/user">
            <UserCredentials />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
