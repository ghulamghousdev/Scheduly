const mongoose = require("mongoose");

//CONNECTING TO DATABASE
mongoose.connect(
  "mongodb+srv://ghulamghousdev:ghulamghous826@scheduly.1eln0.mongodb.net/timetable?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
