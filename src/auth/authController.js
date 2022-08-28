var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const AuthModel = require("./authModel");
const JWT_SECRET_KEY = "abuHurairahisagoodboyandheisgonnatobeagooddeveloper";
const { validationResult } = require("express-validator");
const signUp = async (req, res) => {
  try {
    /* Checking if the request body has any errors. If it does, it will return a 400 status code with the
    errors. */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    /* This is checking if the email address already exists in the database. If it does, it will return a
      400 status code with the message "Sorry a user with this email address already exists." */
    // let isEmail = await AuthModel.findOne({ email: req.body.email });
    // if (isEmail) {
    //   return res
    //     .status(400)
    //     .json("Sorry a user with this email address already exists.");
    // }
    // let isUserName = await AuthModel.findOne({ userName: req.body.userName });
    // if (isUserName) {
    //   return res
    //     .status(400)
    //     .json("Sorry a user with this user name already exists.");
    // }
    const salt = await bcrypt.genSaltSync(10);
    secPass = await bcrypt.hash(req.body.password, salt);
    let userRecord = new AuthModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: secPass,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });
    await userRecord.save();
    const data = {
      user: { id: user },
    };
    const authToken = jwt.sign(data, JWT_SECRET_KEY);
    res.json({ authToken, data });
  } catch (error) {
    console.error(error);
    res.status(500).json("Some error occurred in controller");
  }
};
const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    console.log({ email });
    let isUser = await AuthModel.findOne({ email: email });
    if (!isUser) {
      return res.status(400).json({
        error: "Sorry user with this email doesn't exists.Please sign up.",
      });
    }
    const passwordCompare = await bcrypt.compare(password, employee.password);
    if (!passwordCompare) {
      return res.status(400).json({ error: "Password is incorrect." });
    }
    const data = {
      employee: {
        id: employee.id,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET_KEY);
    res.json({
      authToken: authToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};
module.exports = {
  signUp,
  login,
};
