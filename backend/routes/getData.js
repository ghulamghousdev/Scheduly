const express = require("express");
const auth = require("../middlewares/auth");
const Section = require("../db/models/class");
const Subject = require("../db/models/subject");
const Teacher = require("../db/models/teacher");
const Slots = require("../db/models/addSlots");
const TimeTable = require("../src/timetable/timetable");
const router = express.Router();


router.get("/api/fetchdata", auth, async (req, res) => {
  
  let sectionArray = [];
  let subjectArray = [];
  let teacherArray = [];
  let slotsArray = [];
  let slotsObj = {};
  let givenSlots = [9, 9, 9, 9, 9];
  try {
    let sectionData = await Section.find({ author: req.user._id });
    let subjectData = await Subject.find({ author: req.user._id });
    let teacherData = await Teacher.find({ author: req.user._id });
    let slotsData = await Slots.find({ author: req.user._id });
    //console.log(slotsData);

   for( let i = 0; i< sectionData.length; i++){
     sectionArray[i] = `${sectionData[i].session}-${sectionData[i].section}`; 
   }

    subjectData.forEach((cur) => {
      subjectArray[cur] = subjectData[cur.subjectName];
    });
    //console.log(subjectArray);

    teacherData.forEach((cur) => {
      teacherArray[cur] = teacherData[cur.firstName + " " + cur.lastName];
    });
    //console.log(teacherArray);
    
    slotsData.forEach((cur) => {
      slotsObj.teacher = slotsData[cur.teacherName];
      slotsObj.sections = [slotsData[cur.session]+"-"+slotsData[cur.section]];
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
    //console.log(slotsData);
    

    const resultedTimeTable = TimeTable(
      slotsArray,
      givenSlots,
      teacherArray,
      sectionArray
    );

    res.status(200).send("resultedTimeTable");
  } catch (err) {
    res.status(400).send(err);
  }
});

//Exporting the router to b used in other files
module.exports = router;
