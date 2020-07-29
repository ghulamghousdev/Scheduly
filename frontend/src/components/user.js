import React from "react";
import {BrowserRouter, Route, Switch, Link, NavLink, useParams, useRouteMatch} from "react-router-dom";
import TextBox from './Textbox';
import SignUp from './Signup';
import Login from './Login';
import '../styles/buttonbox.scss';
import '../styles/user.scss';
import Clock from '../clock-illustration.png';
import Graduate from '../graduate-illustration.png';

function UserCredentials() {
    let { path, url } = useRouteMatch();
    return (
      <div className="fp-container">
        <div className="row fw-row col-2-2-1">
          <div className="col-1">
            <TextBox 
              preHeading="Welcome To"
              heading="Scheduly"
              text="This app can be used to generate an automatically scheduled time table. Now get rid of all the manual labour of hit and trial method for generating time table"
            />
            <Switch>
                <Route 
                    path={`${path}/signup`} 
                    render={()=> 
                        <img 
                            src={Clock} 
                            className="form-image" 
                            alt="TimeTable" 
                        />} 
                />
                <Route 
                    path={`${path}/login`} 
                    render={()=> 
                        <img 
                            src={Graduate} 
                            alt="TimeTable"
                            className="form-image"
                        />} 
                />
            </Switch>
            <div className="buttonbox">
                <NavLink 
                    to={`${url}/signup`} 
                    className="buttonbox__button" 
                    activeClassName="buttonbox__button--active"
                >SignUp</NavLink>
                <NavLink 
                    to={`${url}/login`} 
                    className="buttonbox__button" 
                    activeClassName="buttonbox__button--active"
                >LogIn</NavLink>
            </div>
          </div>
          <div className="col-2">
          <Switch>
            <Route path={`${path}/signup`} component={SignUp} />
            <Route path={`${path}/login`} component={Login} />
            <Route path={`${path}/`} exact/>
          </Switch>
          </div>
        </div>
      </div>
    );
  }
  
  export default UserCredentials;
