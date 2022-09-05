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
const deleteFromWishlist = async (req, res) => {
  try {
    let wishlist = await Wishlist.findOneAndDelete({ _id: req.param.id });
    let response = {
      status: 200,
      message: "Property has been successfully removed from your wishlist",
    };
    res.json({ response });
  } catch (error) {
    let response = {
      status: 500,
      message: "Some error occurred.",
    };
    res.json({ response });
  }
};
module.exports = { fetchAll, addToWishlist, deleteFromWishlist };
