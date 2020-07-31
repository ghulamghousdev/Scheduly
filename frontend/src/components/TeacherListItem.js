import React, { Children } from "react";
import "../styles/teacherlistitem.scss";

function ClassListItem(props) {
  const handleRemoveClass = () => {
    //Calling The handler function passed through the props
    props.remove(props.classCode);
  };
  return (
    <div>
      <p></p>
      <button></button>
    </div>
  );
}
