const express = require("express");
const User = require("../db/models/user");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

const router = new express.Router();

//TO REGISTER A NEW USER
router.post("/api/user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
});

//TO LOGIN USER
router.post("/api/user/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (err) {
    res.status(400).send(err);
  }
});

//UPDATING THE INFO OF USER
router.patch("/api/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["firstName", "LastName", "email", "password", "age"];
  const isAllowed = updates.every((curUpdate) =>
    allowedUpdates.includes(curUpdate)
  );

  if (!isAllowed) {
    res.send("Wrong Update attempt");
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.status(200).send(req.user);
  } catch (e) {
    res.send(e);
  }
});

//VIEWING THE INFO OF SOME USER
router.get("/api/users/me", auth, (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (err) {
    res.status(400).send(err);
  }
});

//VIEWING THE INFO OF OTHER USERS
router.get("/api/user/:id", auth, async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not Found");
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send("Unable to find User");
  }
});

//LOGGING OUT OF SPECIFIC SESSION
router.post("/api/user/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((cur) => cur.token !== req.token);
    await req.user.save();
    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
});

//LOGGING OUT OF ALL SESSION
router.post("/api/user/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    req.user.save();
    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
});

//GETTING THE INFORMATION OF SPECIFIC USER
module.exports = router;
