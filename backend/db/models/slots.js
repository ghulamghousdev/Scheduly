const mongoose = require("mongoose");

//Defining the ADD SLOTS schema for Add Slots Model
const addSlotsSchema = mongoose.Schema({
  //Defining the Teacher Name property on ADD SLOTS Schema
  teacherName: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining the subject property on ADD SLOTS Schema
  subjectName: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining the session property on AD SLOTS Schema
  session: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining the section property on ADD SLOTS Schema
  section: {
    type: String,
    required: true,
    trim: true,
  },

  //Defining number of contact hours property on ADD SLOTS Schema
  contactHours: {
    type: Number,
    required: true,
    trim: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Contact hours can not be negative");
      }
      if (value > 3) {
        throw new Error("Contact hours cannot be more then 3");
      }
    },
  },
  //Defining the relationship with the user
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }
});

const Slots = mongoose.model("Slots", addSlotsSchema);

module.exports = Slots;
