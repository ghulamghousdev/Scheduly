import React from "react";
import "../styles/teacherlistitem.scss";

function TeacherListItem(props) {

  const handleRemoveTeacher = () => {
    //Calling The handler function passed through the props
    props.remove(props.itemId);
  };

  return (
    <div className="teacher">
      <p className="teacher__details">
        {props.regNumber} | {props.firstName} {props.lastName} | Working Hours:{" "}
        {props.workingHours} | Courses: {props.subjectName}
      </p>
      <button
        onClick={handleRemoveTeacher}
        className="teacher__btn teacher__btn--remove"
      >
        Remove
      </button>
    </div>
  );
}

export default TeacherListItem;
