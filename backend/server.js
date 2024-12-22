const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const nodemailer = require("nodemailer");
const casesRoutes = require("./routes/casesRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();
const port = 7077;
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
const db = mysql.createPool({
  host: "law.cnusk20e85n3.us-east-1.rds.amazonaws.com", // Use your RDS endpoint
  user: "admin", // Your RDS username
  password: "Project4321", // Your RDS password
  database: "law", // Your RDS database name
  port: 3306, // The default MySQL port
});

db.getConnection((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL!");
  }
});

app.use("/", casesRoutes);
app.get("/api/hello", (req, res) => {
  return res.json({ message: "Hello from the backend!" });
});

app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
});
app.use("/api", chatRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = { app, db };
