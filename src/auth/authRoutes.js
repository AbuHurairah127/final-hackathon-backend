const express = require("express");
const Employees = require("./authModel");
const router = express.Router();
const { body } = require("express-validator");
const authEmployee = require("../middleware/auth");
const authController = require("./authController");

// Creating Employee :Login Required
router.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("firstName").isLength({ min: 3 }),
    body("lastName").isLength({ min: 3 }),
    body("userName").isLength({ min: 3 }),
    body("phoneNumber").isLength({ min: 11 }),
  ],
  authController.signUp
);
// Logging In a user with email and password
router.post(
  "/login",
  [
    body("email", "Enter a valid email address.").isEmail(),
    body("password", "Password can't be blank.").exists(),
  ],
  authController.login
);
// Fetching Users Data
router.post("/user-data", authEmployee, async (req, res) => {
  try {
    const userId = req.user.id;
    const employee = await Employees.findById(userId).select("-password");
    res.status(200).json({ employee });
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Internal server error");
  }
});

module.exports = router;
