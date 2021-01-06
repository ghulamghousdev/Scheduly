"use strict"
const express = require("express");
const app = express();
require("./db/mongoose");
const cors = require('cors');
const path = require('path');

const userRouter = require("./routes/user");
const subjectRouter = require("./routes/subject");
const classRouter = require("./routes/class");
const teacherRouter = require("./routes/teacher");
const slotsRouter = require("./routes/slots");
const algoExecutionRouter = require("./routes/getData");

app.use(express.static(path.join(__dirname, '../' + "/frontend/build")));

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(userRouter);
app.use(teacherRouter);
app.use(classRouter);
app.use(subjectRouter);
app.use(slotsRouter);
app.use(algoExecutionRouter);


// PORT
const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, '../' + "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../' + "/frontend/build/index.html"));
  });
}

app.listen(port, () => {
  console.log("Server is up on port" + port);
});
