const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const nodemailer = require("nodemailer");
const casesRoutes = require("./routes/casesRoutes");
const chatRoutes = require("./routes/chatRoutes");
const path = require('path');

const app = express();
const port = process.env.PORT || 7077;
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
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

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


module.exports = { app, db };
