const express = require("express");
const logging = require("./middlewares/logging");
const products = require('./routes/Products')
const categories = require('./routes/Categories')
const app = express();

app.use(logging);

app.use('/products', products)
app.use('/category', categories)

app.get("/*", (req, res) => {
  res.status(404).send("<h1>404-Page Not Found</h1>");
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
