const express = require("express");
const auth = require("../middlewares/auth");
const Section = require("../db/models/class");
const Subject = require("../db/models/subject");
const Teacher = require("../db/models/teacher");
const Slots = require("../db/models/slots");
const TimeTable = require("../src/timetable/timetable");
const router = express.Router();

router.get("/api/fetchdata", auth, async (req, res) => {
  let sectionArray = [];
  let subjectArray = [];
  let teacherArray = [];
  let slotsArray = [];
  let labs = [];
  let givenSlots = [7, 7, 7, 7, 4];
  try {
    let sectionData = await Section.find({ author: req.user._id });
    let subjectData = await Subject.find({ author: req.user._id });
    let teacherData = await Teacher.find({ author: req.user._id });
    let slotsData = await Slots.find({ author: req.user._id });
    // console.log(sectionData);

    for (let i = 0; i < sectionData.length; i++) {
      sectionArray[i] = `${sectionData[i].section}-${sectionData[i].session}`;
    }

    //console.log(sectionArray);

    //console.log(subjectData);
    for (let i = 0; i < subjectData.length; i++) {
      subjectArray[i] = `${subjectData[i].subjectName}`;
    }

    //console.log(subjectArray);

    for (let i = 0; i < teacherData.length; i++) {
      teacherArray[
        i
      ] = `${teacherData[i].firstName} ${teacherData[i].lastName}`;
    }
    //console.log(teacherArray);

    for (let j = 0; j < slotsData.length; j++) {
      let slotsObj = {};
      slotsObj.teacher = `${slotsData[j].teacherName}`;
      slotsObj.sections = [`${slotsData[j].session}-${slotsData[j].section}`];
      slotsObj.subject = `${slotsData[j].subjectName}`;
      slotsObj.numLectures = `${slotsData[j].contactHours}`;
      slotsObj.numLabs = null;
      slotsArray.push(slotsObj);
    }

    console.log(sectionArray);
    // console.log(teacherArray);
    // console.log(givenSlots);

    //     {
    //       teacher: "W",
    //       sections: ["B2"],
    //       subject: "OS",
    //       numLectures: "3",
    //       numLabs: null,
    //     },
    //   ],
    //   [7, 7, 7, 7, 7],

    // ["A"]
    const resultedTimeTable = await TimeTable(
      slotsArray,
      givenSlots,
      teacherArray,
      sectionArray
    );

    // console.log(TimeTable);

    res.status(200).send(resultedTimeTable);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Exporting the router to b used in other files
module.exports = router;
