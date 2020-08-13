import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import UserCredentials from "./User";
import Dashboard from "./Dashboard";
import HomePage from "./HomePage";

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
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
