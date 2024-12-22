import React from "react";
import styles from "./book.module.css";
import etsh from "./etsh.jpg";
import ters1 from "./ters1.jpg";
import karim from "./karim.jpg";

function Bookpage() {
  const redirectToForm = (lawyerName) => {
    window.location.href = `form?lawyer=${encodeURIComponent(lawyerName)}`;
  };

  return (
    (document.title = "Book | TYK Law Firm") && (
      <>
        <div className={styles.chooseLawyer}>
          <h1 className={styles.chooseLawyerTitle}>Choose Your Lawyer</h1>
          <p className={styles.chooseLawyerDescription}>
            Select one of the lawyers below to get started:
          </p>
        </div>
        <div className={styles.kakk}>
          <div className={styles.container}>
            <div
              className={styles.card}
              onClick={() => redirectToForm("Mohamed Moustafa")}
            >
              <img
                src={ters1}
                alt="Mohamed Moustafa"
                className={`${styles.cardImage} ${styles.largeImage}`}
              />
              <div className={styles.overlay}>
                <h2 className={styles.overlayTitle}>Mohamed Moustafa</h2>
                <h3 className={styles.overlaySubtitle}>Corporate Lawyer</h3>
                <p className={styles.overlayDescription}>
                  Advise businesses and provide strategic assistance on all
                  legal issues they may face. <br />
                  This can include everything from contract negotiations to
                  intellectual property matters.
                </p>
              </div>
            </div>

            <div
              className={styles.card}
              onClick={() => redirectToForm("Karim ElGendy")}
            >
              <img
                src={karim}
                alt="Karim ElGendy"
                className={styles.cardImage}
              />
              <div className={styles.overlay}>
                <h2 className={styles.overlayTitle}>Karim ElGendy</h2>
                <h3 className={styles.overlaySubtitle}>Family Lawyer</h3>
                <p className={styles.overlayDescription}>
                  If you need advice on divorce, cohabitation, or disputes
                  involving children, <br />
                  our expert family law solicitors can help.
                </p>
              </div>
            </div>

            <div
              className={styles.card}
              onClick={() => redirectToForm("Youssef Hisham")}
            >
              <img
                src={etsh}
                alt="Youssef Hisham"
                className={styles.cardImage}
              />
              <div className={styles.overlay}>
                <h2 className={styles.overlayTitle}>Youssef Hisham</h2>
                <h3 className={styles.overlaySubtitle}>
                  Criminal Defense Lawyer
                </h3>
                <p className={styles.overlayDescription}>
                  We defend all charges and know all defenses. Get charges
                  withdrawn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Bookpage;
