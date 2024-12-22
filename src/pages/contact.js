import React from "react";
import styles from "./contact.module.css";

const ContactUs = () => {
  return (
    (document.title = "Contact Us | TYK Law Firm") && (
      <div className={styles.contactUsContainer}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroHeading}>Contact Us</h1>
          <p className={styles.heroDescription}>
            Reach out to us for legal advice and support. We're here to help!
          </p>
        </section>

        <section className={styles.contactInfoSection}>
          <h2 className={styles.teamHeading}>General Contact Information</h2>
          <p className={styles.contactInfoText}>
            <strong>Email:</strong> TYKlawfirm@gmail.com
          </p>
          <p className={styles.contactInfoText}>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p className={styles.contactInfoText}>
            <strong>Address:</strong> 123 Justice Avenue, Legal City, LC 45678
          </p>
        </section>

        <section className={styles.teamSection}>
          <h2 className={styles.teamHeading}>Meet Our Lawyers</h2>
          <div className={styles.teamMembers}>
            <div className={styles.teamMember}>
              <h3 className={styles.teamMemberName}>Youssef Hisham</h3>
              <p className={styles.teamMemberDetails}>
                <strong>Role:</strong> Criminal Defense Specialist
              </p>
              <p className={styles.teamMemberDetails}>
                <strong>Email:</strong> youssef.saad2354@gmail.com
              </p>
              <p className={styles.teamMemberDetails}>
                <strong>Phone:</strong> +20 1113372932
              </p>
            </div>
            <div className={styles.teamMember}>
              <h3 className={styles.teamMemberName}>Mohamed Moustafa</h3>
              <p className={styles.teamMemberDetails}>
                <strong>Role:</strong> Corporate Law Specialist
              </p>
              <p className={styles.teamMemberDetails}>
                <strong>Email:</strong> mmoustfq@gmail.com
              </p>
              <p className={styles.teamMemberDetails}>
                <strong>Phone:</strong> +20 1278510054
              </p>
            </div>
            <div className={styles.teamMember}>
              <h3 className={styles.teamMemberName}>Karim ElGendy</h3>
              <p className={styles.teamMemberDetails}>
                <strong>Role:</strong> Family Law Consultant
              </p>
              <p className={styles.teamMemberDetails}>
                <strong>Email:</strong> kariim.elgendii@gmail.com
              </p>
              <p className={styles.teamMemberDetails}>
                <strong>Phone:</strong> +20 1275086949
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default ContactUs;
