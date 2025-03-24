const express = require("express");
const users = require("./routes/User.routes");
const products = require("./routes/Product.routes");
const cart = require("./routes/Cart.routes");

const app = express();

app.use("/users", users);
app.use("/products",products);
app.use("/cart",cart);
app.use("/*", (req, res, next) => {
  res.send("Page not found");
  next();
});

app.listen(3000);
