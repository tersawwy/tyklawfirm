import React from "react";
import styles from "./homepage.module.css";

function Homepage() {
  return (
    (document.title = "Home | TYK Law Firm") && (
      <div>
        <div className={styles.container}>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h1 className={styles.title}>Welcome to TYK Law Firm</h1>
            <p className={styles.description}>
              Expertise in Legal Services, Dedicated to Justice.
            </p>
          </div>
        </div>

        <div className={styles.historySection}>
          <div className={styles.historyContent}>
            <h2 className={styles.historyTitle}>Our History</h2>
            <p className={styles.historyDescription}>
              Established in 1995, TYK Law Firm has been at the forefront of
              legal excellence. Over the years, we have successfully represented
              countless clients, earning a reputation for integrity, dedication,
              and results.
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default Homepage;
