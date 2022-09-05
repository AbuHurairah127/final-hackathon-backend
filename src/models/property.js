const mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({
  requirement: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  finishedType: { type: String, required: true },
  propertyType: { type: String, required: true },
  areaCovered: { type: String, required: true },
  noOfBedRooms: { type: String },
  noOfBathrooms: { type: String, required: true },
  noOfLivingRooms: { type: String },
  noOfDiningRooms: { type: String },
  noOfKitchens: { type: String, required: true },
  noOfReceptionAreas: { type: String, required: true },
  setAskingPrice: { type: String, required: true },
  ownerName: { type: String, required: true },
  ownerPhoneNumber: { type: String, required: true },
  ownerUID: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: { type: Number, default: 0 },
  likedByUsers: [String],
  updatedAt: { type: Date },
});
module.exports = mongoose.model("properties", propertySchema);
