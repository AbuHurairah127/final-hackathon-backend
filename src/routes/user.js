const express = require("express");
const User = require("../models/user");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("name").isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      /* Checking if the request body has any errors. If it does, it will return a 400 status code with the
  errors. */
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      /* This is checking if the email address already exists in the database. If it does, it will return a
    400 status code with the message "Sorry a user with this email address already exists." */
      let isEmail = await User.findOne({ email: req.body.email });
      if (isEmail) {
        return res
          .status(400)
          .json("Sorry a user with this email address already exists.");
      }
      let isUserName = await User.findOne({ email: req.body.email });
      if (isUserName) {
        return res
          .status(400)
          .json("Sorry a user with this username already exists.");
      }
      const salt = await bcrypt.genSaltSync(10);
      secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
        designation: req.body.designation,
      });
      const data = {
        user: { id: user.id },
      };
      const authToken = jwt.sign(data, JWT_SECRET_KEY);
      res.json({ authToken });
    } catch (error) {
      console.error(error);
      res.status(500).json("Some error occurred");
    }
  }
);
module.exports = router;
