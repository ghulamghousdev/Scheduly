import React from "react";
import {BrowserRouter, Route, Switch, Link, NavLink, useParams, useRouteMatch} from "react-router-dom";
import AddClass from "./addClass";
import AddSubject from "./addSubject";
import "../styles/dashboard.scss";
import Logo from "../logo.svg";

function Dashboard(){
    let { path, url } = useRouteMatch();
    return (
        <BrowserRouter>
        <div className="dashboard row-2-1-5">
            <div className="sidebar">
                <img className="logo" src={Logo} alt="Logo"/>
                <ul className="menu">
                    <li className="menu__li">
                        <NavLink 
                            className="menu__link menu__link--top" 
                            to={`${url}/classes/add`} 
                        >Classes</NavLink>
                    </li>

                    <li className="menu__li">
                        <NavLink 
                            className="menu__link" 
                            to={`${url}/subjects/add`}
                        >Subjects</NavLink>
                    </li>

                    <li className="menu__li">
                        <NavLink 
                            className="menu__link" 
                            to={`${url}/teachers/add`}
                        >Teachers</NavLink>
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
                    <Route path={`${url}/classes/add`}>
                        <AddClass />
                    </Route>
                    <Route path={`${url}/subjects/add`}>
                        <AddSubject />
                    </Route>
                </div>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default Dashboard;