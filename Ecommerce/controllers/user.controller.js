const getUser = (req, res) => {
  res.send("Fetching all users");
}

const addUser = (req, res) => {
  res.send("Adding a new user");
};

const getUserById = (req, res) => {
  res.send(`Fetching user with ID: ${req.params.id}`);
};

module.exports = {getUser, addUser, getUserById}