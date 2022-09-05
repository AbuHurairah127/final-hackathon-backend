const express = require("express");
const router = express.Router();
const wishlistController = require("./../controllers/wishlist");
const authUser = require("./../utils/auth");

router.get("/fetch-all", wishlistController.fetchAll);
router.post("/add-to-wishlist", authUser, wishlistController.addToWishlist);
router.delete(
  "/delete-from-wishlist/:id",
  authUser,
  wishlistController.deleteFromWishlist
);
module.exports = router;
