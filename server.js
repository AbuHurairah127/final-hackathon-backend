const connectToMongoDB = require("./db");
const express = require("express");
connectToMongoDB();
const app = express();
const PORT = 5000;
app.use(express.json());
app.use("/auth", require("./src/auth/authRoutes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
