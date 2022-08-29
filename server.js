const connectToMongoDB = require("./src/config/db");
const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const DB = process.env.DB;
connectToMongoDB();
app.use(express.json());
app.use("/auth", require("./src/routes/user"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
