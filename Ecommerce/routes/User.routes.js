const express = require("express");

const router = express.Router();

const users = [];

router.post('/', (req, res) => {
    try {
        const newUser = { id: req.id, name: req.name };
        users.push(newUser);
        res.send("User added successfully");
    } catch (error) {
        res.send(error);
    }
})

router.get("/", (req, res) => {
  res.send(`Users: ${users.map((user) => user.name)}`);
});

router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id); // Convert id to a number
  const user = users.find((s) => s.id === userId);

  if (!user) {
    res.send("user not found");
  } else {
    res.send(`user: ${user.name}`);
  }
});

module.exports = router;