const connectToMongoDB = require("./src/config/db");
const express = require("express");
require("dotenv").config();
var cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const DB = process.env.DB;
connectToMongoDB();
app.use(express.json());
app.use(cors());
app.use("/auth", require("./src/routes/user"));
app.use("/properties", require("./src/routes/property"));
app.use("/wishlist", require("./src/routes/wishlist"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
