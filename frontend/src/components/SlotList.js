import React from "react";
import SlotListItem from "./SlotListItem";
import axios from "axios";
import "../styles/slotslist.scss";

class SlotList extends React.Component {
  constructor() {
    super();
    this.handleRemoveSlot = this.handleRemoveSlot.bind(this);
    this.state = {
      slots: [
        {
          slotID: 1,
          teacherName: "Samyan Wahla",
          subjectName: "Algorithm Analysis",
          session: 2018,
          section: "B",
          noOfLectures: 3,
        },
        {
          slotID: 2,
          teacherName: "Awais Hasan",
          subjectName: "DBMS",
          session: 2018,
          section: "A",
          noOfLectures: 3,
        },
      ],
    };
  }

  handleRemoveSlot(slotID) {
    this.setState((prevState) => ({
      slots: prevState.slots.filter((cur) => cur.slotID !== slotID),
    }));
  }

  render() {
    return (
      <div className="viewbox">
        <h1 className="viewbox__heading">Allocated Slots</h1>
        {this.state.slots.map((cur) => (
          <SlotListItem
            remove={this.handleRemoveSlot}
            slotID={cur.slotID}
            teacherName={cur.teacherName}
            subjectName={cur.subjectName}
            session={cur.session}
            section={cur.section}
            noOfLectures={cur.noOfLectures}
          />
        ))}
      </div>
    );
  }
}

export default SlotList;
