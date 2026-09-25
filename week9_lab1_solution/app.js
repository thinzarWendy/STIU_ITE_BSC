const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/students");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>Week 9 Guided Lab 1: Register and Login</h1>
    <p>This API includes Student routes and Authentication routes.</p>
    <h3>Authentication Routes</h3>
    <ul>
      <li>POST /api/auth/register</li>
      <li>POST /api/auth/login</li>
    </ul>
  `);
});

app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
