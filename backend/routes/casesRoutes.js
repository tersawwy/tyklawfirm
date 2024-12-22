const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "law",
});

// POST: Submit a new case
router.post("/api/cases", (req, res) => {
  const { lawyer, name, number, email, message } = req.body;

  console.log("Received lawyer:", lawyer); // Debug log

  // Assign email based on the lawyer
  let assignedEmail = "";
  switch (lawyer.trim()) {
    case "Karim ElGendy":
      assignedEmail = "kariim.elgendii@gmail.com";
      break;
    case "Mohamed Moustafa":
      assignedEmail = "mmoustfq@gmail.com";
      break;
    case "Youssef Hisham":
      assignedEmail = "youssef.saad2354@gmail.com";
      break;
    default:
      console.log("No match found for lawyer:", lawyer); // Debug log
      assignedEmail = "default@example.com";
  }

  // Insert into the database
  const query = `
    INSERT INTO cases (lawyer, name, number, email, message, assigned_email)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [lawyer, name, number, email, message, assignedEmail],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ error: "Database insertion failed" });
      }
      res.status(200).json({
        message: "Case submitted successfully!",
        ticketno: result.insertId,
        debug: {
          receivedLawyer: lawyer,
          assignedEmail: assignedEmail,
        },
      });
    }
  );
});
// GET: Retrieve cases by email
router.get("/api/cases", (req, res) => {
  const email = req.query.email; // Get the email from query parameters

  if (!email) {
    return res.status(400).json({ error: "Email is required to fetch cases" });
  }

  const query = "SELECT * FROM cases WHERE assigned_email = ?";

  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error fetching cases:", err);
      return res.status(500).json({ error: "Database query failed" });
    }

    if (results.length === 0) {
      return res
        .status(404)
        .json({ message: "No cases found for the given email" });
    }

    res.status(200).json(results);
  });
});
router.post("/api/cases/update-status", (req, res) => {
  const { ticketno, status, updatemessage } = req.body;

  // Validate the request payload
  if (!ticketno || status === undefined || updatemessage === undefined) {
    return res.status(400).json({ error: "Invalid request data" });
  }

  // Update the case in the MySQL database
  const query = `
    UPDATE cases
    SET status = ?, updatemessage = ?
    WHERE ticketno = ?
  `;

  db.query(query, [status, updatemessage, ticketno], (err, result) => {
    if (err) {
      console.error("Error updating case:", err);
      return res.status(500).json({ error: "Database update failed" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Case not found" });
    }

    res.status(200).json({ message: "Case updated successfully" });
  });
});
router.get("/api/cases/status", (req, res) => {
  const email = req.query.email; // Get the email from query parameters

  if (!email) {
    return res.status(400).json({ error: "Email is required to fetch cases" });
  }

  const query = "SELECT * FROM cases WHERE email = ?";

  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error fetching cases:", err);
      return res.status(500).json({ error: "Database query failed" });
    }

    if (results.length === 0) {
      return res
        .status(404)
        .json({ message: "No cases found for the given email" });
    }

    const latestCase = results[0];
    if (latestCase.status === 0) {
      return res
        .status(200)
        .json({ message: "No update available", status: 0 });
    }

    res.status(200).json(results);
  });
});

module.exports = router;
