const mongoose = require("mongoose");

//Defining the teacher schema for teacher Model
const teacherSchema = mongoose.Schema({
  //Defining the first name property on teacher Schema
  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining the last name property on teacher Schema
  lastName: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining the reg number property on teacher Schema
  regNumber: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "Reg Number is already taken"],
  },

  //Defining the working hours property on teacher Schema
  workingHours: {
    type: Number,
    required: true,
    trim: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Working hours cannot be a negative number");
      }
      if (value > 20) {
        throw new Error("Working hours cannot be more then 18");
      }
    },
  },
  
  //DEFINING A FOREIGN RELATIONSHIP WITH USER
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
