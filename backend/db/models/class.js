const mongoose = require("mongoose");

//Defining the class schema for class Model
const classSchema = mongoose.Schema({
  //Defining the Class Name property on class Schema
  className: {
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
  session: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining a relationship between user and Class
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Section = mongoose.model("Section", classSchema);

module.exports = Section;
