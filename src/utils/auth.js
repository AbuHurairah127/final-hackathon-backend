const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.SECRET_KEY;

const authUser = (req, res, next) => {
  try {
    const token = req.header("token");
    console.log(JWT_SECRET_KEY);
    if (!token) {
      res.status(401).send("Access Denied");
    }
    console.log(token);
    const data = jwt.verify(token, JWT_SECRET_KEY);
    console.log(data);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send("Access Denied in catch error");
  }
};

module.exports = authUser;