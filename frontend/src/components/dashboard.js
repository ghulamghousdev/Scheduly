import React from "react";
import {BrowserRouter, Route, Switch, Link, NavLink, useParams, useRouteMatch} from "react-router-dom";
import "../styles/dashboard.scss";
import Logo from "../logo.svg"

const Dashboard = ()=>{
    let { path, url } = useRouteMatch();

    const handleLogout= ()=>{

    }

    return (
        <div className="dashboard row-2-1-5">
            <div className="sidebar">
                <img className="logo" src={Logo} alt="Logo"/>
                <ul className="menu">
                    <li className="menu__li">
                        <NavLink className="menu__link menu__link--top" to={`{url}/classes/add`}>Classes</NavLink>
                    </li>
                    <li className="menu__li">
                        <NavLink className="menu__link" to={`{url}/subjects/add`}>Subjects</NavLink>
                        </li>
                    <li className="menu__li">
                        <NavLink className="menu__link" to={`{url}/teachers/add`}>Teachers</NavLink>
                    </li>
                    <li className="menu__li">
                        <NavLink className="menu__btn" to={`{url}/teachers/add`}>Generate</NavLink>
                    </li>
                </ul>
            </div>
            <div className="right-container">
                <div className="secondary-menubar">
                    <ul className="secondary-menu">
                        <li><Link className="secondary-menu__link" exact to="/">Home</Link></li>
                        <li><button className="secondary-menu__btn" onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div>
                <div className="component-container">

                </div>
            </div>
        </div>
    )
}

export default Dashboard;