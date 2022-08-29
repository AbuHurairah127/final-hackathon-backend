const mongoose = require("mongoose");
require("dotenv").config;

const connectToMongoDB = () => {
  mongoose.connect(process.env.DB, () => {
    console.log("MongoDB is working Properly");
  });
};
module.exports = connectToMongoDB;
