const mongoose = require("mongoose");
//Defining the subject schema for Subject Model
const subjectSchema = mongoose.Schema({
  //Defining the subject code on Subject Schema
  subjectCode: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "Subject code is already taken"],
    minLength: 5,
  },

  //Defining the subject name on Subject Schema
  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining the Credit Hours on Subject Schema
  creditHours: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new error("Credit hours can not be negative");
      }
      if (value > 3) {
        throw new error("Credit hours cannot be more then 3");
      }
    },
  },

  //Defining the Contact Hours on Subject Schema
  contactHours: {
    type: Number,
    require: true,
    validate(value) {
      if (value < 0) {
        throw new error("Contact hours can not be negative");
      }
      if (value > 3) {
        throw new error("Contact hours cannot be more then 3");
      }
    },
  },
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
