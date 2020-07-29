import React from "react";
import axios from "axios";
import "../styles/addform.scss";

class AddSlots extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="addform">
        <form>
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
        </form>
      </div>
    );
  }
}
