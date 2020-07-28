import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import UserCredentials from "./user";
import Dashboard from "./dashboard";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user">
          <UserCredentials />
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
