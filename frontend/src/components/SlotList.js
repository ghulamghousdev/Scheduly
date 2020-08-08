import React from "react";
import SlotListItem from "./SlotListItem";
import auth from "../utils/auth"
import axios from "axios";
import "../styles/slotslist.scss";

class SlotList extends React.Component {
  constructor() {
    super();
    this.handleRemoveSlot = this.handleRemoveSlot.bind(this);
    this.state = {
      slots: []
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
      const res = await axios.get('/api/slots', config);
      console.log(res);
      this.setState((prevState, props)=>{
        return ({
          slots: prevState.slots.concat(res.data)
        })
      }, ()=>{
        //console.log(this.state);
      })
    } catch(err){
    }
  }

  async handleRemoveSlot(itemId) {
    try{
      const authToken = auth.getAuthToken();
      const config = {
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${authToken}`
        }
      }
      const res = await axios.delete(`/api/slots/${itemId}`, config);
      console.log(res.status);
      this.setState((prevState) => ({
        slots: prevState.slots.filter((cur) => cur._id !== itemId),
      }));
    } catch(err){
      console.log(err);
    }
    
  }

  render() {
    return (
      <div className="viewbox">
        <h1 className="viewbox__heading">Allocated Slots</h1>
        {this.state.slots.map((cur) => (
          <SlotListItem
            remove={this.handleRemoveSlot}
            teacherName={cur.teacherName}
            subjectName={cur.subjectName}
            session={cur.session}
            section={cur.section}
            contactHours={cur.contactHours}
            itemId={cur._id}
          />
        ))}
      </div>
    );
  }
}

export default SlotList;
