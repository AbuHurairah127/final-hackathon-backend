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
const addProperty = async (req, res) => {
  try {
    /* Checking if the request body has any errors. If it does, it will return a 400 status code with the
  errors. */

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const property = await Property.create({
      requirement: req.body.requirement,
      address: req.body.address,
      city: req.body.city,
      finishedType: req.body.finishedType,
      propertyType: req.body.propertyType,
      areaCovered: req.body.areaCovered,
      noOfBedRooms: req.body.noOfBedRooms,
      noOfBathrooms: req.body.noOfBathrooms,
      noOfLivingRooms: req.body.noOfLivingRooms,
      noOfDiningRooms: req.body.noOfDiningRooms,
      noOfKitchens: req.body.noOfKitchens,
      noOfReceptionAreas: req.body.noOfReceptionAreas,
      setAskingPrice: req.body.setAskingPrice,
      ownerName: req.body.ownerName,
      ownerPhoneNumber: req.body.ownerPhoneNumber,
      ownerUID: req.body.ownerUID,
    });
    const response = {
      status: 200,
      body: {
        message: "Property has been successfully Added.",
      },
    };
    res.json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json("Some error occurred");
  }
};

module.exports = {
  addProperty,
  fetchAll,
};
