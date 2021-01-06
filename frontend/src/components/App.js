import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import UserCredentials from "./User";
import Dashboard from "./Dashboard";
import HomePage from "./HomePage";
import Footer from "./Footer";
import PrivateRoute from './PrivateRoute';

class App extends React.Component {
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
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;