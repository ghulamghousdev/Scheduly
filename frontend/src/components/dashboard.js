import React from "react";
import {BrowserRouter, Route, Switch, Link, NavLink, useParams, useRouteMatch} from "react-router-dom";
import AddClass from "./AddClass";
import AddSubject from "./AddSubject";
import AddTeacher from "./AddTeacher";
import ClassList from './ClassList';
import "../styles/dashboard.scss";
import Logo from "../logo.svg";

function Dashboard() {
  let { path, url } = useRouteMatch();
  return (
    <BrowserRouter>
      <div className="dashboard row-2-1-5">
        <div className="sidebar">
          <img className="logo" src={Logo} alt="Logo" />
          <ul className="menu">
            <li className="menu__li">
              <NavLink
                className="menu__link menu__link--top"
                to={`${url}/classes/add`}
              >
                Classes
              </NavLink>
            </li>

            <li className="menu__li">
              <NavLink className="menu__link" to={`${url}/subjects/add`}>
                Subjects
              </NavLink>
            </li>

            <li className="menu__li">
              <NavLink className="menu__link" to={`${url}/teachers/add`}>
                Teachers
              </NavLink>
            </li>

            <li className="menu__li">
              <NavLink className="menu__link" to={`${url}/slots/add`}>
                Slots
              </NavLink>
            </li>

                    <li className="menu__li">
                        <NavLink 
                            to="/"
                            className="menu__btn"
                        >Generate</NavLink>
                    </li>
                </ul>
            </div>
            <div className="right-container">
                <div className="secondary-menubar">
                    <ul className="secondary-menu">
                        <li><Link className="secondary-menu__link" exact to="/">Home</Link></li>
                        <li><button className="secondary-menu__btn">Logout</button></li>
                    </ul>
                </div>
                <div className="component-container">
                    <Switch>
                        <Route path={`${url}/classes/add`}>
                            <AddClass />
                        </Route>
                        <Route path={`${url}/subjects/add`}>
                            <AddSubject />
                        </Route>
                        <Route path={`${url}/teachers/add`}>
                            <AddTeacher />
                        </Route>
                        <Route path={`${url}/classes/view`}>
                            <ClassList className="N-7" session="2018" section="A" />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
