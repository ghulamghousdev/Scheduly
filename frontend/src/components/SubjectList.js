import React from "react";
import SubjectListItem from "./SubjectListItem";
import auth from "../utils/auth";
import axios from "axios";
import "../styles/subjectlist.scss";

class SubjectList extends React.Component {
  constructor() {
    super();
    this.handleRemoveSubject = this.handleRemoveSubject.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      subjects: []
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
      const res = await axios.get('/api/subjects', config);
      this.setState((prevState, props)=>{
        return ({
          subjects: prevState.subjects.concat(res.data)
        })
      }, ()=>{
        console.log(this.state);
      })
    } catch(err){
    }
  }

  async handleRemoveSubject(itemId) {
    try{
      const authToken = auth.getAuthToken();
      const config = {
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${authToken}`
        }
      }
      const res = await axios.delete(`/api/subject/${itemId}`, config);
      console.log(res.status);
      this.setState((prevState) => ({
        subjects: prevState.subjects.filter(
          (cur) => cur._id !== itemId
        ),
      }));
    } catch(err){
      console.log(err);
    }
    
  }

  render() {
    return (
      <div class="viewbox">
        <h1 className="viewbox__heading">All Subjects</h1>
        {this.state.subjects.map((cur) => (
          <SubjectListItem
            remove={this.handleRemoveSubject}
            subjectCode={cur.subjectCode}
            subjectName={cur.subjectName}
            creditHours={cur.creditHours}
            contactHours={cur.contactHours}
            key={cur.subjectCode}
            itemId={cur._id}
          />
        ))}
      </div>
    );
  }
}

export default SubjectList;
