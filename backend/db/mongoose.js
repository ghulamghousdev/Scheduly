const mongoose = require("mongoose");

//CONNECTING TO DATABASE
mongoose
  .connect(
    "mongodb://ghulamghousdev:ghulamghous826@scheduly-shard-00-00.1eln0.mongodb.net:27017,scheduly-shard-00-01.1eln0.mongodb.net:27017,scheduly-shard-00-02.1eln0.mongodb.net:27017/timetable?ssl=true&replicaSet=atlas-avxmlz-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });