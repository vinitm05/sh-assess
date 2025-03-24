const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

// Cart Routes
router.get("/:userId", cartController.getCartForUser);
router.post("/:userId", cartController.addProductToCart);

module.exports = router;
