import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import UserCredentials from "./user";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user">
          <UserCredentials />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
