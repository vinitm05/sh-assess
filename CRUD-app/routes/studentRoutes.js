const express = require("express");

const router = express.Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

router.get("/", (req, res) => {
  res.send(`Students: ${students.map((student)=>student.name)}`);
});

router.get("/:id", (req, res) => {
  const studentId = parseInt(req.params.id); // Convert id to a number
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    res.send("Student not found");
  } else {
    res.send(`Student: ${student.name}`);
  }
});


module.exports = router;
