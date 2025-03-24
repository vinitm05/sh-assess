const express = require("express");
const app = express();

// Import route files
const userRoutes = require("./routes/User.routes");
const productRoutes = require("./routes/Product.routes");
const cartRoutes = require("./routes/Cart.routes");

app.use(express.json());
app.use(express.static('public'))

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
