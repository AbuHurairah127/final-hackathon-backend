const Wishlist = require("../models/wishlist");
const fetchAll = async (req, res) => {
  try {
    const wishListedProperties = await Wishlist.find();
    res.json(wishListedProperties);
  } catch (error) {
    res.status(500).json("Some error occurred");
  }
};
const addToWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.create({
      propertyUID: req.body.propertyUID,
      userUID: req.user.id,
    });
    const response = {
      status: 200,
      body: {
        message: "Property has been successfully added to wishlist.",
      },
    };
    res.json({ response });
  } catch (error) {
    res.status(500).json("Some error occurred");
  }
};
module.exports = { fetchAll, addToWishlist };
