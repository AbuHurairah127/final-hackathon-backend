const mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({
  requirement: { type: "string", required: true },
  address: { type: "string", required: true },
  city: { type: "string", required: true },
  finishedType: { type: "string", required: true },
  propertyType: { type: "string", required: true },
  areaCovered: { type: "string", required: true },
  noOfBedRooms: { type: "string" },
  noOfBathrooms: { type: "string", required: true },
  noOfLivingRooms: { type: "string" },
  noOfDiningRooms: { type: "string" },
  noOfKitchens: { type: "string", required: true },
  noOfReceptionAreas: { type: "string", required: true },
  setAskingPrice: { type: "string", required: true },
  ownerName: { type: "string", required: true },
  ownerPhoneNumber: { type: "string", required: true },
  ownerUID: { type: "string", required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("properties", propertySchema);
