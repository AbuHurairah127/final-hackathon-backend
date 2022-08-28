const mongoose = require("mongoose");
const { Schema } = mongoose;
const usersSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});
const AuthModel = mongoose.model("users", usersSchema);
module.exports = AuthModel;
