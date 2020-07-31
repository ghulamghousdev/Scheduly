import React from "react";
import SubjectListItem from "./SubjectListItem";
import axios from "axios";
import "../styles/subjectlist.scss";

class SubjectList extends React.Component {
  constructor() {
    super();
    this.handleRemoveSubject = this.handleRemoveSubject.bind(this);
    this.state = {
      subjects: [
        {
          subjectCode: "CS311",
          subjectName: "Operating System",
          creditHours: 3,
          contactHours: 3,
          labs: 1,
        },
        {
          subjectCode: "CS363",
          subjectName: "Algorithm Analysis",
          creditHours: 3,
          contactHours: 3,
          labs: 0,
        },
        {
          subjectCode: "CS393",
          subjectName: "DBMS",
          creditHours: 3,
          contactHours: 3,
          labs: 1,
        },
        {
          subjectCode: "CS313",
          subjectName: "Theory of Automata",
          creditHours: 3,
          contactHours: 3,
          labs: 0,
        },
      ],
    };
  }

  handleRemoveSubject(subjectCode) {
    this.setState((prevState) => ({
      subjects: prevState.subjects.filter(
        (cur) => cur.subjectCode !== subjectCode
      ),
    }));
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
            labs={cur.labs}
          />
        ))}
      </div>
    );
  }
}

export default SubjectList;
