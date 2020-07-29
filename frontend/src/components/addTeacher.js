import React from "react";
import axios from "axios";
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

  render() {
    return (
      <div className="addform addteacher">
        <form>
          <h1 className="addform__heading">Add Teacher</h1>
          <input
            className="addform__input addform__input--half addform__input--left"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          <input
            className="addform__input  addform__input--half addform__input--right"
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

          {this.state.selectedSubjects.map((cur) => (
            <p className="addform__selectedOptions">{`${cur.subjectCode} | ${cur.subjectName}`}</p>
          ))}
          <div className="addform__dropdown">
            <select name="subjects" id="subjects" className="addform__select">
              {this.state.subjects.map((cur) => (
                <option
                  className="addform__option"
                  value={cur.subjectCode}
                >{`${cur.subjectCode} | ${cur.subjectName}`}</option>
              ))}
            </select>
            <input
              onClick={this.handleSelect}
              className="addform__btn"
              type="button"
              value="SELECT"
            />
          </div>
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
