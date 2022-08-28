const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "abuHurairahisagoodboyandheisgonnatobeagooddeveloper";

const authEmployee = (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    res.status(401).send("Access Denied");
  }
  try {
    const data = jwt.verify(token, JWT_SECRET_KEY);
    console.log(data);
    req.user = data.employee;
    next();
  } catch (error) {
    res.status(401).send("Access Denied in catch error");
  }
};

module.exports = authEmployee;
