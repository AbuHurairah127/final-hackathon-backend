const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authController = require("./../controllers/user");
const authUser = require("./../utils/auth");
//Route -1 creating a new user:No login required
router.post(
  "/register",
  [
    body("email", "Please enter a valid email address.").isEmail(),
    body("password", "Password is incorrect").isLength({ min: 5 }),
    body("userName", "Please enter the username").isLength({ min: 3 }),
    body("lastName", "Please enter your last name").isLength({ min: 3 }),
    body("firstName", "please enter your first name").isLength({ min: 3 }),
    body("phoneNumber", "Please enter your phone number").isLength({ min: 11 }),
  ],
  authController.register
);
//Route - 2 Logging in a user:No login required
router.post(
  "/login",
  [
    body("email", "Please enter a valid email address.").isEmail(),
    body("password", "Password is incorrect").isLength({ min: 5 }),
  ],
  authController.login
);
// Fetching Users Data
router.post("/user-data", authUser, authController.userData);
module.exports = router;
