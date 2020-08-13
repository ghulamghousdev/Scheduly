import React from "react";
import axios from "axios";
import auth from "../utils/auth"
import "../styles/addform.scss";

class AddSlots extends React.Component {
  constructor() {
    super();
    this.handleAddSlots = this.handleAddSlots.bind(this);
  }

  async handleAddSlots(e){
    e.preventDefault();
    e.persist();
    const teacherName = e.target.elements.teacherName.value;
    const session = e.target.elements.session.value;
    const section = e.target.elements.section.value;
    const subjectName = e.target.elements.subjectName.value;
    const contactHours = e.target.elements.contactHours.value;

    const slotDetails = {
        teacherName,
        subjectName,
        session,
        section,
        contactHours
    }

    try{
        const authToken = auth.getAuthToken();
        const config = {
            headers: {
                'Content-Type': 'Application/json',
                Authorization: `Bearer ${authToken}`
            }
        }
        const body = JSON.stringify(slotDetails);
        const res = await axios.post('/api/slot ', body, config);
        console.log(res.data);

        e.target.elements.teacherName.value = '';
        e.target.elements.session.value = '';
        e.target.elements.section.value = '';
        e.target.elements.subjectName.value = '';
        e.target.elements.contactHours.value = '';


    } catch (err){
        console.log(err);
    }
}

  render() {
    return (
      <div class="addform">
        <form onSubmit={this.handleAddSlots}>
          <h1 className="addform__heading">Add Slots</h1>
          <input
            className="addform__input addform__input--full"
            type="text"
            placeholder="Teacher Name"
            name="teacherName"
          />
          <input
            className="addform__input addform__input--full"
            type="text"
            placeholder="Subject Name"
            name="subjectName"
          />
          <input
            className="addform__input addform__input--full"
            type="number"
            placeholder="Session"
            name="session"
          />
          <input
            className="addform__input addform__input--half addform__input--left"
            type="text"
            placeholder="Section"
            name="section"
          />
          <input
            className="addform__input addform__input--half addform__input--right"
            type="number"
            placeholder="Lectures"
            name="contactHours"
          />
          <input
            className="addform__btn"
            type="submit"
            name="submit"
            value="ADD SLOTS"
          />
        </form>
      </div>
    );
  }
}

export default AddSlots;
