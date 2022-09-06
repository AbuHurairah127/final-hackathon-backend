const connectToMongoDB = require("./src/config/db");
const express = require("express");
require("dotenv").config();
var cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const DB = process.env.DB;
connectToMongoDB();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use("/auth", require("./src/routes/user"));
app.use("/properties", require("./src/routes/property"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
