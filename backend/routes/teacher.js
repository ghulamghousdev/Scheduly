const express = require("express");
const auth = require("../middlewares/auth");
const Teacher = require("../db/models/teacher");

const router = express.Router();

//TO ADD A NEW TEACHER
router.post("/api/teacher", auth, async (req, res) => {
  const teacher = new Teacher({
    ...req.body,
    author: req.user._id,
  });

  try {
    await teacher.save();
    res.status(200).send(teacher);
  } catch (err) {
    res.status(400).send(err);
  }
});

//GET ALL TEACHERS
router.get("/api/teacher", auth, async (req, res) => {
  try {
    await req.user.populate("teacher").execPopulate();
    res.status(201).send(req.user.teacher);
  } catch (err) {
    res.status(400).send(err);
  }
});
//GET A TEACHER BY SPECIFYING ITS _id
router.get("/api/teacher/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const teacher = await Teacher.findOne({ _id, author: req.user._id });
    if (!teacher) {
      return res.status(404).send();
    }
    res.send(teacher);
  } catch (error) {
    res.status(502).send();
  }
});

//EDIT A TEACHER BY SPECIFYING ITS ID
router.patch("/api/teacher/:id", auth, async (req, res) => {});

//DELETE ALL TEACHER
router.delete("/api/teacher", auth, async (req, res) => {
  try {
    await Teacher.deleteMany({ author: req.user._id });
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

//DELETE A TEACHER BY SPECIFYING ITS ID
router.delete("/api/teacher/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    await Teacher.deleteOne({ _id, author: req.user._id });
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

//EXPORTING THE ROUTER TO BE USED IN OTHER FILES
module.exports = router;
