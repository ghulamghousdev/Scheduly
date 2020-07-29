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
  subject: {
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
});

const AddSlots = mongoose.model("AddSlots", addSlotsSchema);

module.exports = AddSlots;
