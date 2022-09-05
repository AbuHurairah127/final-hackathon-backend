const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.SECRET_KEY;

const authUser = (req, res, next) => {
  try {
    const token = req.header("token");
    if (!token) {
      res.status(401).send("Access Denied");
    }
    const data = jwt.verify(token, JWT_SECRET_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send("Access Denied in catch error");
  }
};

module.exports = authUser;
