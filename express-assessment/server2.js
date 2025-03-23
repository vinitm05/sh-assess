const express = require("express");
const logging = require("./middlewares/logging");
const app = express();

app.use(logging);

app.get("/products", (req, res) => {
  res.send("Here is the lsit of all products");
});

app.post("/products", (req, res) => {
  res.send("A new product has been added");
});

app.get("/categories", (req, res) => {
  res.send("Here is the lsit of all categories");
});

app.post("/categories", (req, res) => {
  res.send("A new category has been created");
});

app.get("/*", (req, res) => {
  res.status(404).send("<h1>404-Page Not Found</h1>");
});
app.listen(4000, () => {
  console.log("Listening on port 4000");
});
