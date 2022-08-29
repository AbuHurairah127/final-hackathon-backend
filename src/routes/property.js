const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const propertyController = require("./../controllers/property");
const authUser = require("./../utils/auth");
//Route -1 creating a new user:No login required
router.get("/fetch-all", propertyController.fetchAll);

module.exports = router;
