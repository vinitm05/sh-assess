const express = require("express");
const students = require("./routes/studentRoutes");
const courses = require("./routes/courseRoutes");

const app = express();

app.use("/students", students);
app.use("/courses", courses);
app.use('/*', (req, res, next) => {
    res.send("Page not found");
    next();
})

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Student & Course Portal API!</h1>");
})

app.listen(3000);
