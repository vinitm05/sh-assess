const express = require("express");

const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

router.get("/", (req, res) => {
  res.send(`Courses: ${courses.map((course) => course.name)}`);
});

router.get("/:id", (req, res) => {
  const courseId = parseInt(req.params.id); // Convert id to a number
  const course = courses.find((s) => s.id === courseId);

  if (!course) {
    res.send("Course not found");
  } else {
    res.send(`Course: ${course.name}, Description: ${course.description}`);
  }
});
module.exports = router;
