import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import styles from "./yoour-cases.module.css";

const Cases = () => {
  const { userEmail } = useContext(UserContext);
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCases = async () => {
      if (!userEmail) {
        setError("Please log in to view your cases");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching cases for:", userEmail);
        const res = await axios.get("http://localhost:7077/api/cases", {
          params: { email: userEmail },
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Cases fetched successfully:", res.data);
        setCases(res.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching cases:", error);
        setError("Failed to fetch cases. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, [userEmail]);

  const CaseCard = ({ caseItem }) => {
    const [statusMessage, setStatusMessage] = useState("");
    const [updatedStatus, setUpdatedStatus] = useState("");

    const handleUpdateStatus = async () => {
      if (!updatedStatus) {
        alert("Please select a status");
        return;
      }

      try {
        const statusValue = updatedStatus === "no update" ? 0 : 1;

        // Make the API call to update the status and message
        await axios.post("http://localhost:7077/api/cases/update-status", {
          ticketno: caseItem.ticketno,
          status: statusValue,
          updatemessage: statusMessage,
        });

        alert("Status updated successfully!");

        // Reset form fields
        setUpdatedStatus("");
        setStatusMessage("");
      } catch (error) {
        console.error("Error updating status:", error);
        alert("Failed to update status. Please try again.");
      }
    };

    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{caseItem.name}</h3>
          <div className={styles.cardDetails}>
            <p>
              <span className={styles.label}>Phone:</span> {caseItem.number}
            </p>
            <p>
              <span className={styles.label}>Email:</span> {caseItem.email}
            </p>
            <p>
              <span className={styles.label}>Current Status:</span>{" "}
              {caseItem.status === 0
                ? "No Update"
                : caseItem.status === 1
                ? "Updated"
                : ""}
            </p>
          </div>
        </div>

        <div className={styles.cardMessage}>
          <p>{caseItem.message}</p>
        </div>

        <div className={styles.form}>
          <div>
            <label htmlFor="status" className={styles.label}>
              Update Status:
            </label>
            <select
              id="status"
              onChange={(e) => setUpdatedStatus(e.target.value)}
              value={updatedStatus}
              className={styles.select}
            >
              <option value="no update">No Update</option>
              <option value="updated">Updated</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className={styles.label}>
              Message to Client:
            </label>
            <textarea
              id="message"
              value={statusMessage}
              onChange={(e) => setStatusMessage(e.target.value)}
              rows="4"
              className={styles.textarea}
            />
          </div>

          <button onClick={handleUpdateStatus} className={styles.button}>
            Update Status
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Cases</h1>
        {userEmail && (
          <p className={styles.emailText}>Showing cases for: {userEmail}</p>
        )}
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {loading ? (
        <div className={styles.loading}>Loading cases...</div>
      ) : (
        <div>
          {cases.length > 0 ? (
            cases.map((caseItem) => (
              <CaseCard key={caseItem.ticketno} caseItem={caseItem} />
            ))
          ) : (
            <div className={styles.loading}>
              {userEmail
                ? "No cases found for your email."
                : "Please log in to view your cases."}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cases;
