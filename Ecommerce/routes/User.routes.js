const express = require("express");
const { getUser, addUser, getUserById } = require("../controllers/user.controller");
const router = express.Router();

// Fetch all users
router.get("/", getUser);

// Add a new user
router.post("/", addUser);

// Fetch a user by their ID
router.get("/:id", getUserById);

module.exports = router;
