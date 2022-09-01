const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: "string", required: true },
  lastName: { type: "string", required: true },
  userName: { type: "string", required: true },
  email: { type: "string", required: true },
  password: { type: "string", required: true },
  phoneNumber: { type: "string", required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("users", userSchema);
