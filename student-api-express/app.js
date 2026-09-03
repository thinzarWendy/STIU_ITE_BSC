const express = require("express");
const students = require("./students.json");

const app = express();
const PORT = 3000;

// Set EJS as the template engine.
// Express will look for template files inside the views folder.
app.set("view engine", "ejs");

// Custom logger middleware.
// This runs for every request before the route handler.
app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log(`${req.method} ${req.url} ${time}`);
  next();
});

// Built-in middleware.
// This allows Express to read JSON data sent in POST requests.
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send(`
    <h1>Student API in Express</h1>
    <p>Welcome to the Student API.</p>
    <h3>Available Routes:</h3>
    <ul>
      <li>GET /api/students</li>
      <li>GET /api/students/1</li>
      <li>GET /api/students?major=IT</li>
      <li>GET /students</li>
      <li>POST /api/students</li>
    </ul>
  `);
});

// GET all students.
// Optional query string example: /api/students?major=IT
app.get("/api/students", (req, res) => {
  const major = req.query.major;

  if (major) {
    const filteredStudents = students.filter((student) => student.major === major);
    return res.json(filteredStudents);
  }

  res.json(students);
});

// POST a new student.
// Test using Postman, Thunder Client, or REST Client.
app.post("/api/students", (req, res) => {
  const newStudent = req.body;

  if (!newStudent.id || !newStudent.name || !newStudent.major) {
    return res.status(400).json({
      error: "Please provide id, name, and major"
    });
  }

  students.push(newStudent);

  res.status(201).json(newStudent);
});

// GET one student by ID.
// Example: /api/students/2
app.get("/api/students/:id", (req, res) => {
  const id = req.params.id;

  const student = students.find((student) => student.id === Number(id));

  if (!student) {
    return res.status(404).json({
      error: "Student not found"
    });
  }

  res.json(student);
});

// Render students as an HTML page using EJS.
// This uses views/students.ejs.
app.get("/students", (req, res) => {
  res.render("students", {
    title: "All Students",
    students: students
  });
});

// 404 handler.
// This must be placed after all normal routes.
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
