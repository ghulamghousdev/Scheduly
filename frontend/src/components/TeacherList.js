import React from "react";
import TeacherListItem from "./TeacherListItem";
import axios from "axios";
import "../styles/teacherlist.scss";

class TeacherList extends React.Component {
  constructor() {
    super();
    this.handleRemoveSubject = this.handleRemoveTeacher.bind(this);
    this.state = {
      teachers: [
        {
          regNumber: "CS30",
          firstName: "Awais",
          lastName: "Hasan",
          workingHours: 12,
          subjectName: "DBMS",
        },
        {
          regNumber: "CS31",
          firstName: "Samyan",
          lastName: "Wahla",
          workingHours: 12,
          subjectName: "AOA",
        },
      ],
    };
  }

  handleRemoveTeacher(regNumber) {
    this.setState((prevState) => ({
      subjects: prevState.teachers.filter((cur) => cur.regNumber !== regNumber),
    }));
  }

  render() {
    return (
      <div class="viewbox">
        <h1 className="viewbox__heading">All Teachers</h1>
        {this.state.teachers.map((cur) => (
          <TeacherListItem
            remove={this.handleRemoveSubject}
            regNumber={cur.regNumber}
            firstName={cur.firstName}
            lastName={cur.lastName}
            workingHours={cur.workingHours}
            subjectName={cur.subjectName}
          />
        ))}
      </div>
    );
  }
}

export default TeacherList;
