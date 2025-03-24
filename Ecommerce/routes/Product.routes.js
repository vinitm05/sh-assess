const express = require("express");
const { getProduct, addProduct, getProductById } = require("../controllers/products.controller");
const router = express.Router();

// Fetch all products
router.get("/", getProduct);

// Add a new product
router.post("/", addProduct);

// Fetch a product by its ID
router.get("/:id", getProductById);

module.exports = router;
