const Wishlist = require("../models/wishlist");
const fetchAll = async (req, res) => {
  try {
    const wishListedProperties = await Wishlist.find();
    res.json(wishListedProperties);
  } catch (error) {
    res.status(500).json("Some error occurred");
  }
};
module.exports = { fetchAll };
