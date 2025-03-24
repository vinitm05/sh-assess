const express = require("express");
const { getCart, addCart } = require("../controllers/cart.controller");
const router = express.Router();

// Fetch the cart items for a specific user
router.get("/:userId", getCart);

// Add a product to the user's cart
router.post("/:userId", addCart);

module.exports = router;
