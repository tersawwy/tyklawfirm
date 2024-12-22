const express = require("express");
const nodemailer = require("nodemailer");
const mysql = require("mysql");
const router = express.Router();
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "law",
});

const oauth2Client = new OAuth2(
  "704429428612-hqofkt12ljlsgpoe6ejm6i1qbp1qt5bc.apps.googleusercontent.com", // ClientID
  "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", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);
oauth2Client.setCredentials({
  refresh_token:
    "1//04IaFBcRVlXTXCgYIARAAGAQSNwF-L9IreHV6z-JT0KblJ3Jt1kRwbMSnIX_XteL_m9jpqOQlTH28knzmqIg7I5AhLGVZTdwzIto",
});
const accessToken = oauth2Client.getAccessToken();
// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "factos25@gmail.com",
    clientId:
      "704429428612-hqofkt12ljlsgpoe6ejm6i1qbp1qt5bc.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//04IaFBcRVlXTXCgYIARAAGAQSNwF-L9IreHV6z-JT0KblJ3Jt1kRwbMSnIX_XteL_m9jpqOQlTH28knzmqIg7I5AhLGVZTdwzIto",
    accessToken: accessToken,
  },
});

// Generate OTP function
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send OTP email
const sendOtpEmail = (email, otp) => {
  const mailOptions = {
    from: "factos25@gmail.com",
    to: email,
    subject: "Your OTP for Login",
    text: `Your OTP is: ${otp}`,
    html: `<p>Your OTP is: <strong>${otp}</strong></p>`,
  };
  return transporter.sendMail(mailOptions);
};

// Route to generate OTP
router.post("/generate-otp", (req, res) => {
  const { email } = req.body;

  // Check if the email exists in the database
  const query = "SELECT * FROM alogin WHERE email = ?";
  db.query(query, [email], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error checking email" });
    }

    if (result.length === 0) {
      return res.status(400).json({ message: "Email not found" });
    }

    // Generate OTP
    const otp = generateOTP();

    // Save OTP to DB (temporarily)
    const updateQuery = "UPDATE alogin SET otp = ? WHERE email = ?";
    db.query(updateQuery, [otp, email], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error saving OTP" });
      }

      // Send OTP email
      sendOtpEmail(email, otp)
        .then(() => {
          res.status(200).json({ message: "OTP sent successfully!", otp }); // Send OTP as response for testing purposes
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ message: "Error sending OTP" });
        });
    });
  });
});

router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  // Ensure email and OTP are provided
  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  const query = "SELECT otp FROM alogin WHERE email = ?";
  db.query(query, [email], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Error verifying OTP" });
    }

    if (result.length > 0) {
      const storedOtp = result[0].otp?.toString().trim(); // Convert to string and trim
      const providedOtp = otp.toString().trim(); // Convert to string and trim

      // Log for debugging (can be removed in production)
      console.log("Stored OTP:", storedOtp);
      console.log("Provided OTP:", providedOtp);

      if (storedOtp === providedOtp) {
        return res.status(200).json({ message: "OTP verified successfully!" });
      } else {
        return res.status(400).json({ message: "Invalid OTP" });
      }
    } else {
      return res.status(404).json({ message: "Email not found" });
    }
  });
});

module.exports = router;
