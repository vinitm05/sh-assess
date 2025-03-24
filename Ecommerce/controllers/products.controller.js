const path = require("path");

exports.getAllProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "products.html"));
};

exports.addProduct = (req, res) => {
  res.json({ value: req.body.productName });
};

exports.getProductById = (req, res) => {
  res.send(`Fetching product with ID: ${req.params.id}`);
};
