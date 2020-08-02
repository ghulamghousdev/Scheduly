import React, { Children } from "react";
import "../styles/slotslistitem.scss";

const SLotListItem = (props) => {
  const handleRemoveSlot = () => {
    //Calling The handler function passed through the props
    props.remove(props.slotID);
  };

  return (
    <div className="slot">
      <p className="slot__details">
        {props.slotID} | {props.teacherName} | {props.subjectName} |{" "}
        {props.session} - {props.section} | Lectures:{props.noOfLectures}
      </p>
      <button
        onClick={handleRemoveSlot}
        className="slot__btn slot__btn--remove"
      >
        Remove
      </button>
    </div>
  );
};

export default SLotListItem;
