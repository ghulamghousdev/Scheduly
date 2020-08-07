import React from "react";
import ClassListItem from "./ClassListItem";
import auth from "../utils/auth";
import axios from "axios";
import "../styles/classlist.scss";

class ClassList extends React.Component {
  constructor() {
    super();
    this.handleRemoveClass = this.handleRemoveClass.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      classes: [],
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
      const res = await axios.get('/api/class', config);
      this.setState((prevState, props)=>{
        return ({
          classes: prevState.classes.concat(res.data)
        })
      }, ()=>{
        console.log(this.state);
      })
    } catch(err){
    }
  }

  async handleRemoveClass(itemId) {
    try{
      const authToken = auth.getAuthToken();
      const config = {
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${authToken}`
        }
      }
      const res = await axios.delete(`/api/class/${itemId}`, config);
      console.log(res.status);
      this.setState((prevState) => ({
        classes: prevState.classes.filter((cur) => cur._id !== itemId),
      }));
    } catch(err){
      console.log(err);
    }
  }

  render() {
    return (
      <div className="viewbox">
        <h1 className="viewbox__heading">All Classes</h1>
        {this.state.classes.map((cur) => (
          <ClassListItem
            remove={this.handleRemoveClass}
            classCode={cur.className}
            session={cur.session}
            section={cur.section}
            key={cur.classCode}
            itemId={cur._id}
          />
        ))}
      </div>
    );
  }
}

export default ClassList;
