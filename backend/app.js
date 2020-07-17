const express = require("express");
const app = express();
require("./db/mongoose");

const userRouter = require("./routes/user");
const subjectRouter = require("./routes/subject");
const classRouter = require("./routes/class");
const teacherRouter = require("./routes/teacher");

app.use(express.json());
app.use(userRouter);
app.use(teacherRouter);
app.use(classRouter);
app.use(subjectRouter);

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is up on port" + port);
});
