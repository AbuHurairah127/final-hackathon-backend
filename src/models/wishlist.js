const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishlistSchema = new Schema({
  propertyUID: { type: "string", required: true },
  userUID: { type: "string", required: true },
  addedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("wishlist", wishlistSchema);
