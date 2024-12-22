import React, { useState } from "react";
import axios from "axios";
import styles from "./client-status.module.css"; // Import the CSS module
import config from '../config';

const ClientStatusPage = () => {
  const [email, setEmail] = useState("");
  const [caseStatus, setCaseStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchClientStatus = async () => {
    if (!email.trim()) {
      setError("Please enter a valid email.");
      return;
    }

    setError(null); // Clear previous errors
    setLoading(true);

    try {
      const res = await axios.get(`${config.API_URL}/cases/status`, {
  params: { email },
});

      if (res.data && res.data.length > 0) {
        // Assuming we want the most recent case (or adjust logic if needed)
        const latestCase = res.data[0];
        setCaseStatus(latestCase.status);
        setStatusMessage(latestCase.updatemessage || "No message provided.");
      } else if (res.data.status === 0) {
        setCaseStatus(0);
        setStatusMessage("No update available");
      } else {
        setError("No cases found for the provided email.");
        setCaseStatus(null);
        setStatusMessage("");
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("No cases found for the provided email.");
      } else {
        console.error("Error fetching client status:", err);
        setError("Failed to fetch status. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Check Your Case Status</h1>

      <div className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <button onClick={fetchClientStatus} className={styles.button}>
          Check Status
        </button>
      </div>

      {loading && <p className={styles.loading}>Loading...</p>}

      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && caseStatus !== null && (
        <div className={styles.statusCard}>
          <p className={styles.statusText}>
            {caseStatus === 0 ? "No Update" : `Update: ${statusMessage}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default ClientStatusPage;
