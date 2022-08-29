const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.SECRET_KEY;
const Property = require("../models/property");
const { validationResult } = require("express-validator");
const fetchAll = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json("Some error occurred");
  }
};

module.exports = {
  fetchAll,
};
