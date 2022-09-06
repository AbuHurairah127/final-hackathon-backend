const Property = require("../models/property");
const { validationResult } = require("express-validator");
const fetchAll = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
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
    let property = await Property.findOne(req.param.id);
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
const likeProperty = async (req, res) => {
  // logic updateProperty
  try {
    const likeProperty = {
      propertyID: req.param.id,
      likes: req.body.likes,
      likedByUsers: req.body.likedByUsers,
    };
    let likedProperty = await Property.findOne(req.param.id);
    likedProperty = await Property.findByIdAndUpdate(
      { _id: req.params.id },
      likeProperty
    );
    let response = {
      status: 200,
      message: "Successfully added to your wishlist.",
    };
    console.log(response, "response");
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
    let property = await Property.findOne(req.param.id);
    property = await Property.findByIdAndDelete({ _id: req.params.id });
    let response = {
      status: 200,
      message: "Successfully deleted",
    };
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
  likeProperty,
};
