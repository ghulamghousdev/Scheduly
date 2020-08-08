const express = require("express");
const auth = require("../middlewares/auth");
const Slots = require("../db/models/slots");

const router = express.Router();

//To save one assigned class to a teacher
router.post("/api/slot", auth, async (req, res) => {
  const slot = new Slots({
    ...req.body,
    author: req.user._id,
  });

  try {
    await slot.save();
    res.status(200).send(slot);
  } catch (error) {
    res.status(400).send(error);
  }
});

//To get all the assigned slots to designated teachers
router.get("/api/slots", auth, async (req, res) => {
  try {
    await req.user.populate("slots").execPopulate();
    res.status(200).send(req.user.slots);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Delete all instances of assigned classes to teachers
router.delete("/api/addSlots", auth, async (req, res) => {
  try {
    await Slots.deleteMany({ author: req.user._id });
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

//Delete a instance of a assigned class to a teacher
router.delete("/api/slots/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    await Slots.deleteOne({ _id, author: req.user._id });
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
