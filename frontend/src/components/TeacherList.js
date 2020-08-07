import React from "react";
import TeacherListItem from "./TeacherListItem";
import auth from "../utils/auth";
import axios from "axios";
import "../styles/teacherlist.scss";

class TeacherList extends React.Component {
  constructor() {
    super();
    this.handleRemoveSubject = this.handleRemoveTeacher.bind(this);
    this.state = {
      teachers: []
    };
  }

  
  componentDidMount(){
    this.fetchData();
  }

  async fetchData(){
    try{
      const authToken = auth.getAuthToken();
      const config = {
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${authToken}`
        }
      }
      const res = await axios.get('/api/teacher', config);
      this.setState((prevState, props)=>{
        return ({
          teachers: prevState.teachers.concat(res.data)
        })
      }, ()=>{
        console.log(this.state);
      })
    } catch(err){
      console.log(err);
    }
  }


  async handleRemoveTeacher(itemId) {
    try{
      const authToken = auth.getAuthToken();
      const config = {
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${authToken}`
        }
      }
      const res = await axios.delete(`/api/teacher/${itemId}`, config);
      console.log(res.status);
    } catch(err){
      console.log(err);
    }

    this.setState((prevState) => ({
      teachers: prevState.teachers.filter((cur) => cur._id !== itemId),
    }));
  }

  render() {
    return (
      <div className="viewbox">
        <h1 className="viewbox__heading">All Teachers</h1>
        {this.state.teachers.map((cur) => (
          <TeacherListItem
            remove={this.handleRemoveSubject}
            regNumber={cur.regNumber}
            firstName={cur.firstName}
            lastName={cur.lastName}
            workingHours={cur.workingHours}
            subjectName={cur.subjectName}
            key={cur.regNumber}
            itemId={cur._id}
          />
        ))}
      </div>
    );
  }
}

export default TeacherList;
