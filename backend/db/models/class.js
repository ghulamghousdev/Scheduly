const mongoose = require("mongoose");

//Defining the class schema for class Model
const classSchema = mongoose.Schema({
  //Defining the Class ID property on class Schema
  classID: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "Class ID is already taken"],
  },

  //Defining the section property on class Schema
  section: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining the session property on class Schema
  section: {
    type: String,
    required: true,
    trim: true,
  },
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
