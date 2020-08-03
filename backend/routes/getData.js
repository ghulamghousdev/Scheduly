const express = require("express");
const auth = require("../middlewares/auth");
const Section = require("../db/models/class");
const Subject = require("../db/models/subject");
const Teacher = require("../db/models/teacher");
const Slots = require("../db/models/addSlots");
const TimeTable = require("../src/timetable/timetable");

const router = express.Router();
const sectionArray = [];
const subjectArray = [];
const teacherArray = [];
const slotsArray = [];
const slotsObj = {};
const givenSlots = [9, 9, 9, 9, 9];

router.get("/api/fetchdata", auth, async (req, res) => {
  try {
    const sectionData = await Section.find({ author: req.user._id });
    const subjectData = await Subject.find({ author: req.user._id });
    const teacherData = await Teacher.find({ author: req.user._id });
    const slotsData = await Slots.find({ author: req.user._id });
    sectionData.forEach((cur) => {
      sectionArray[cur] = sectionData[cur.section];
    });
    subjectData.forEach((cur) => {
      subjectArray[cur] = subjectData[cur.subjectName];
    });
    teacherData.forEach((cur) => {
      teacherArray[cur] = teacherData[cur.firstName + " " + cur.lastName];
    });
    slotsData.forEach((cur) => {
      slotsObj.teacher = slotsData[cur.teacherName];
      slotsObj.sections = [slotsData[cur.section]];
      slotsObj.subject = slotsData[cur.subjectName];
      slotsObj.numLectures = slotsData[cur.contactHours];
      for (let i = 0; i < subjectData.length; i++) {
        if (slotsData[cur.subjectName] === subjectData[i.subjectName]) {
          slotsObj.labs = subjectData[i.labs];
          break;
        }
      }
      slotsArray[cur] = slotsObj;
    });

    const resultedTimeTable = await TimeTable(
      slotsArray,
      givenSlots,
      teacherArray,
      sectionArray
    );

    res.status(200).send(resultedTimeTable);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Exporting the router to b used in other files
module.exports = router;
