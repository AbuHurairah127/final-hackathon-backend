const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  likedProperties: { type: [String] },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("users", userSchema);
