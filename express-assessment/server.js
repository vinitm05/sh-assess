const express = require("express");
const addProperty = require("./middlewares/addProperty");

const app = express();

app.get('/welcome', addProperty, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`)
})

app.listen(3000, () => {
    console.log(
      "Server is up and running on port 3000! Ready to handle requests."
    );
})