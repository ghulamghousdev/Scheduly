import React from "react";
import "../styles/classlistitem.scss";

function ClassListItem(props) {
  const handleRemoveClass = () => {
    //Calling The handler function passed through the props
    props.remove(props.itemId);
  };

  return (
    <div className="class">
      <p className="class__details">
        {props.classCode} | {props.session} - {props.section}
      </p>
      <button
        onClick={handleRemoveClass}
        className="class__btn class__btn--remove"
      >
        Remove
      </button>
    </div>
  );
}

export default ClassListItem;
