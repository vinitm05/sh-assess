const express = require("express");

const router = express.Router();

const products = [];

router.post('/', (req, res) => {
    try {
        const newProduct = { id: req.id, name: req.name };
        products.push(newProduct);
        res.send("Product added successfully");
    } catch (error) {
        res.send(error);
    }
})

router.get("/", (req, res) => {
  res.send(`Product: ${products.map((product) => product.name)}`);
});

router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id); // Convert id to a number
  const product = products.find((s) => s.id === productId);

  if (!product) {
    res.send("product not found");
  } else {
    res.send(`product: ${product.name}`);
  }
});

module.exports = router;