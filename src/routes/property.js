const express = require("express");
const router = express.Router();
// const { body } = require("express-validator");
const propertyController = require("./../controllers/property");
const authUser = require("./../utils/auth");
//Route -1 creating a new user:No login required
router.get("/fetch-all", propertyController.fetchAll);
router.post("/add-property", authUser, propertyController.addProperty);
router.put("/update-property/:id", authUser, propertyController.updateProperty);
router.delete("/delete-property/:id", propertyController.deleteProperty);
router.put("/like-property/:id", authUser, propertyController.likeProperty);

module.exports = router;
