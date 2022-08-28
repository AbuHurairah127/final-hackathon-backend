const mongoose = require("mongoose");
const mongooseURL =
  "mongodb+srv://abuhurairah_127:abuhurairah_127@cluster0.9mlwpfr.mongodb.net/?retryWrites=true&w=majority";
const connectToMongoDB = () => {
  mongoose.connect(mongooseURL, () => {
    console.log("Connected to MongoDB");
  });
};
module.exports = connectToMongoDB;
