const mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({
  title: { type: "string", required: true },
  address: { type: "string", required: true },
  finishedType: { type: "string", required: true },
  propertyType: { type: "string", required: true },
  areaCovered: { type: "string", required: true },
  noOfBedRooms: { type: "string", required: true },
  noOfBathrooms: { type: "string", required: true },
  noOfLivingRooms: { type: "string", required: true },
  noOfDiningRooms: { type: "string", required: true },
  noOfKitchens: { type: "string", required: true },
  noOfReceptionAreas: { type: "string", required: true },
  setAskingPrice: { type: "string", required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("properties", propertySchema);
