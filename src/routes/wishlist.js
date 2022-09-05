const express = require("express");
const router = express.Router();
const wishlistController = require("./../controllers/wishlist");
const authUser = require("./../utils/auth");

router.get("/fetch-all", wishlistController.fetchAll);
router.post("/add-to-wishlist", authUser, wishlistController.addToWishlist);
module.exports = router;
