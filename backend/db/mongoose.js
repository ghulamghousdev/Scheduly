const mongoose = require("mongoose");

//CONNECTING TO DATABASE
mongoose.connect(
  "mongodb+srv://ghulamghousdev:ghulamghous826@scheduly.1eln0.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
