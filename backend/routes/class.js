const express = require("express");
const auth = require("../middlewares/auth");
const Section = require("../db/models/class");

const router = express.Router();

//TO ADD A NEW SECTION
router.post("/api/class", auth, async (req, res) => {
  const section = new Section({
    ...req.body,
    author: req.user._id,
  });

  try {
    await section.save();
    res.status(200).send(section);
  } catch (err) {
    res.status(400).send(err);
  }
});

//GET ALL THE CLASSES
router.get("/api/class", auth, async (req, res) => {
  try {
    await req.user.populate("section").execPopulate();
    res.status(201).send(req.user.section);
  } catch (err) {
    res.status(400).send(err);
  }
});

//GET A CLASS BY SPECIFYING ITS _id
router.get("/api/class/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const section = await Section.findOne({
      _id,
      author: req.user._id,
    });
    if (!section) {
      return res.status(404).send();
    }
    res.send(section);
  } catch (error) {
    res.status(502).send();
  }
});

//EDIT A CLASS BY SPECIFYING ITS _id
router.patch("/api/class/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["className", "section", "session"];
  const isAllowedUpdates = updates.every((curUpdate) =>
    allowedUpdates.includes(curUpdate)
  );
  if (!isAllowedUpdates) {
    res.send("Wrong update attempt");
  }
  try {
    updates.forEach((update) => (req.user.class[update] = req.body[update]));
    await req.user.class.save();
    res.status(200).send(req.class);
  } catch (error) {
    res.send(error);
  }
});

//DELETE ALL CLASS
router.delete("/api/class", auth, async (req, res) => {
  try {
    await Section.deleteMany({ author: req.user._id });
    res.status(200).send();
  } catch (err) {
    res.status(400).send(err);
  }
});

//DELETE A CLASS BY SPECIFYING ITS ID
router.delete("/api/class/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    await Section.deleteOne({ _id, author: req.user._id });
    res.status(200).send();
  } catch (err) {
    res.status(400).send(err);
  }
});

//EXPORTING THE ROUTER TO BE USED IN OTHER FILES
module.exports = router;
