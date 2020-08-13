import React from "react";
import axios from "axios";
import auth from "../utils/auth"
import "../styles/addform.scss";

class AddTeacher extends React.Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      subjects: [
        { subjectCode: "CS101", subjectName: "Programming Fundamentals" },
        { subjectCode: "CS102", subjectName: "Programming Fundamentals" },
        { subjectCode: "CS103", subjectName: "Programming Fundamentals" },
      ],
      selectedSubjects: [],
    };
  }

  handleSelect(e) {
    const subjectCode = document.querySelector(".addform__select").value;

    let subject = this.state.subjects.filter((cur) => {
      return cur.subjectCode === subjectCode;
    });

    this.setState((prevState) => {
      return {
        selectedSubjects: prevState.selectedSubjects.concat(subject[0]),
      };
    });
  }

  async handleAddTeacher(e){
    e.preventDefault();
    e.persist();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const regNumber = e.target.elements.regNumber.value;
    const workingHours = e.target.elements.workingHours.value;

    const teacher = {
      firstName,
      lastName,
      regNumber,
      workingHours
    }

    try{
      const authToken = auth.getAuthToken();
      const config = {
        headers: {
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${authToken}`
        }
      }
      const body = JSON.stringify(teacher);
      const res = await axios.post('/api/teacher', body, config);
      console.log(res);
      e.target.elements.firstName.value = '';
      e.target.elements.lastName.value = '';
      e.target.elements.regNumber.value = '';
      e.target.elements.workingHours.value = '';

    } catch(err){
      console.log(err);
    }
  }

  render() {
    return (
      <div className="addform addteacher">
        <form onSubmit={this.handleAddTeacher}>
          <h1 className="addform__heading">Add Teacher</h1>
          <input
            className="addform__input addform__input--full"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          <input
            className="addform__input  addform__input--full"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          <input
            className="addform__input addform__input--half addform__input--left"
            type="text"
            placeholder="Reg Number"
            name="regNumber"
          />
          <input
            className="addform__input addform__input--half addform__input--right"
            type="text"
            placeholder="Working Hours"
            name="workingHours"
          />

          
          <input
            className="addform__btn"
            type="submit"
            name="submit"
            value="ADD TEACHER"
          />
        </form>
      </div>
    );
  }
}

export default AddTeacher;
