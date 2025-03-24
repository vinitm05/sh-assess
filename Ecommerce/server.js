const express = require("express");
const app = express();

// Import route files
const userRoutes = require("./routes/User.routes");
const productRoutes = require("./routes/Product.routes");
const cartRoutes = require("./routes/Cart.routes");

// Use routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
