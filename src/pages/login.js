import React, { useState, useContext } from "react";
import axios from "axios";
import styles from "./login.module.css"; // Your CSS file
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import config from "../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [message, setMessage] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const { setUserLoggedIn, setUserEmail } = useContext(UserContext); // Access the global state
  const navigate = useNavigate();
  const handleGenerateOtp = async () => {
    try {
      const res = await axios.post(
  `${config.API_URL}/auth/generate-otp`,
  { email }
);
      setGeneratedOtp(res.data.otp); // Store the generated OTP
      setMessage(res.data.message);
      setOtp(generatedOtp);
      setShowOtpInput(true);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error generating OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      if (otp.trim() === generatedOtp.trim()) {
        const res = await axios.post(
  `${config.API_URL}/auth/verify-otp`,
  {
    email,
    otp,
  }
);

        setMessage(res.data.message);
        setUserEmail(email); // Set the user email in context
        setUserLoggedIn(true); // Update the logged-in status
        navigate("/"); // Redirect to home page
      } else {
        setMessage("Invalid OTP");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error verifying OTP");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      {!showOtpInput ? (
        <button onClick={handleGenerateOtp} className={styles.button}>
          Generate OTP
        </button>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleVerifyOtp} className={styles.button}>
            Verify OTP
          </button>
        </>
      )}
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Login;
