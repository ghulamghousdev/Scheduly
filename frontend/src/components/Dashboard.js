import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import axios from "axios"
import AddClass from "./AddClass";
import AddSubject from "./AddSubject";
import AddTeacher from "./AddTeacher";
import AddSlots from "./AddSlots";
import ClassList from "./ClassList";
import SubjectList from "./SubjectList";
import TeacherList from "./TeacherList";
import SlotList from "./SlotList";
import TimeTable from "./TimeTable";
import OperateManual from "./OperateManual";
import "../styles/dashboard.scss";
import Logo from "../logo.svg";
import auth from "../utils/auth";

function Dashboard(props) {
  let { path, url } = useRouteMatch();

  const handleLogout = async ()=>{

    try{
      const authToken = auth.getAuthToken();
      const config = {
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${authToken}`
        }
      }
      const body = JSON.stringify({});
      const res = await axios.post('/api/user/logout',body, config);
      console.log(res);
      if(res.status === 200){
        auth.removeAuthToken(authToken);
        window.location.href = '/';
      }
      
    } catch(err){
    }

  }
  
  const handleHomeRedirect = ()=>{
    console.log("hello World");
    window.location.href= '/';
  }

  return (
    <BrowserRouter>
      <div className="dashboard row-2-1-5">
        <div className="sidebar">
          <img className="logo" src={Logo} alt="Logo" />
          <ul className="menu">
            <li className="menu__li menu__li--class">
              <NavLink
                className="menu__link menu__link--top"
                to={`${url}/classes/add`}
              >
                Classes
              </NavLink>
              <ul className="submenu submenu--class">
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/classes/add`}
                  >
                  Add Class
                  </NavLink>
                </li>
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/classes/view`}
                  >
                  All Classes
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="menu__li menu__li--subject">
              <NavLink className="menu__link" to={`${url}/subjects/add`}>
                Subjects
              </NavLink>
              <ul className="submenu submenu--subject">
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/subjects/add`}
                  >
                  Add Subject
                  </NavLink>
                </li>
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/subjects/view`}
                  >
                  All Subjects
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="menu__li menu__li--teacher">
              <NavLink className="menu__link" to={`${url}/teachers/add`}>
                Teachers
              </NavLink>
              <ul className="submenu submenu--teacher">
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/teachers/add`}
                  >
                  Add Teacher
                  </NavLink>
                </li>
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/teachers/view`}
                  >
                  All Teachers
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="menu__li menu__li--slot">
              <NavLink className="menu__link" to={`${url}/slots/add`}>
                Slots
              </NavLink>
              <ul className="submenu submenu--slot">
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/slots/add`}
                  >
                  Add Slot
                  </NavLink>
                </li>
                <li className="submenu__item">
                  <NavLink 
                    className="submenu__link" 
                    to={`${url}/slots/view`}
                  >
                  All Slots
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="menu__li">
              <NavLink to={`${url}/timetable`} className="menu__btn">
                Generate
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right-container">
          <div className="secondary-menubar">
            <ul className="secondary-menu">
              <li>
                <button onClick={handleLogout} className="secondary-menu__btn">Logout</button>
              </li>
            </ul>
          </div>
          <div className="component-container">
            <Switch>
              <Route path={`${url}/classes/add`}>
                <AddClass/>
              </Route>
              <Route path={`${url}/subjects/add`}>
                <AddSubject/>
              </Route>
              <Route path={`${url}/teachers/add`}>
                <AddTeacher/>
              </Route>
              <Route path={`${url}/slots/add`}>
                <AddSlots/>
              </Route>
              <Route path={`${url}/classes/view`}>
                <ClassList/>
              </Route>
              <Route path={`${url}/subjects/view`}>
                <SubjectList/>
              </Route>
              <Route path={`${url}/teachers/view`}>
                <TeacherList/>
              </Route>
              <Route path={`${url}/slots/view`}>
                <SlotList />
              </Route>
              <Route path={`${url}/timetable`}>
                <TimeTable />
              </Route>
              <Route path={`${url}/`}>
                <OperateManual />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
