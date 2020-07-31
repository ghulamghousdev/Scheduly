const express = require("express");
const auth = require("../middlewares/auth");
const AddSlots = require("../db/models/addSlots");

const router = express.Router();

//To save one assigned class to a teacher
router.post("/api/addSlots", auth, async (req, res) => {
  const addSlots = new AddSlots({
    ...req.body(),
    author: req.user._id,
  });

  try {
    await addSlots.save();
    res.status(200).send(addSlots);
  } catch (error) {
    res.status(400).send(error);
  }
});

//To get all the assigned slots to designated teachers
router.get("/api/addSlots", auth, async (req, res) => {
  try {
    await req.user.populate("addSlots");
    res.status(200).send(req.user.addSlots);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Delete all instances of assigned classes to teachers
router.delete("/api/addSlots", auth, async (req, res) => {
  try {
    await AddSlots.deleteMany({ author: req.user._id });
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

//Delete a instance of a assigned class to a teacher
router.delete("/api/addSlots/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    await AddSlots.deleteOne({ _id, author: req.user._id });
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
