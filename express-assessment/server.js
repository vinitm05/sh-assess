const express = require("express");
const addProperty = require("./middlewares/addProperty");

const app = express();

app.get("/welcome", addProperty, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.get("/orders", (req, res) => {
  res.send("Here is the list of all orders.");
});

app.post("/orders", (req, res) => {
  res.send("A new order has been created.");
});

app.get("/users", (req, res) => {
  res.send("Here is the list of all users.");
});

app.post("/users", (req, res) => {
  res.send("A new user has been added.");
});

app.listen(3000, () => {
  console.log(
    "Server is up and running on port 3000! Ready to handle requests."
  );
});
