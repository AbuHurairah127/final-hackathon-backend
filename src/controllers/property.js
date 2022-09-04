const Property = require("../models/property");
const { validationResult } = require("express-validator");
const { findOne } = require("../models/property");
const { response } = require("express");
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
const updateProperty = async (req, res) => {
  // logic updateProperty
  try {
    const updateProperty = {
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
      updatedAt: new Date(),
    };
    console.log("req.params.id", req.params.id);
    let property = await Property.findOne(req.param.id);
    console.log("User's id", req.user.id, "ownerUID", property.ownerUID);
    property = await Property.findByIdAndUpdate(
      { _id: req.params.id },
      updateProperty
    );
    let response = {
      status: 200,
      message: "Successfully Updated",
    };
    res.json(response);
  } catch (error) {
    let response = {
      status: 401,
      message: error,
    };
    res.json(response);
  }
};
const deleteProperty = async (req, res) => {
  try {
    console.log("req.params.id", req.params.id);
    let property = await Property.findOne(req.param.id);
    console.log("ownerUID", property.ownerUID);
    property = await Property.findByIdAndDelete({ _id: req.params.id });
    let response = {
      status: 200,
      message: "Successfully deleted",
    };
    console.log(property);
    res.json(response);
  } catch (error) {
    let response = {
      status: 401,
      message: error.message,
    };
    res.json(response);
  }
};

module.exports = {
  addProperty,
  updateProperty,
  fetchAll,
  deleteProperty,
};
