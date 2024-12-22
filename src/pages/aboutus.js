import React from "react";
import H from "./etsh.jpg";
import tersawy from "./ters1.jpg";
import karim from "./karim.jpg";
import styles from "./aboutus.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    (document.title = "About Us | TYK Law Firm") && (
      <div className={styles.aboutus}>
        <section className={`${styles.hero} text-center py-5`}>
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={`${styles.heroDescription} lead`}>
            Dedicated to providing exceptional legal services tailored to your
            needs.
          </p>
        </section>

        <section className={`${styles.missionVision} row my-5`}>
          <div className={`${styles.mission} col-md-20`}>
            <h2 className={styles.missionTitle}>Our Mission</h2>
            <p className={styles.missionDescription}>
              To deliver outstanding legal solutions while maintaining the
              highest level of integrity and professionalism.
            </p>
          </div>
          <div className={`${styles.vision} col-md-6`}>
            <h2 className={styles.visionTitle}>Our Vision</h2>
            <p className={styles.visionDescription}>
              To be a trusted partner in achieving justice and fostering
              positive change for our clients and community.
            </p>
          </div>
        </section>

        <section className={`${styles.team} text-center my-5`}>
          <h2 className={styles.teamTitle}>Meet Our Team</h2>
          <div
            className={`${styles.teamMembers} row justify-content-center mt-4`}
          >
            <div className={`${styles.teamMember} col-sm-6 col-md-4 mb-4`}>
              <img
                className={styles.teamMemberImage}
                width="200px"
                src={H}
                alt="Youssef Hisham"
              />
              <h3 className={styles.teamMemberName}>Youssef Hisham</h3>
              <p className={styles.teamMemberRole}>Criminal Defense Lawyer</p>
            </div>
            <div className={`${styles.teamMember} col-sm-6 col-md-4 mb-4`}>
              <img
                className={styles.teamMemberImage}
                width="200px"
                height="200px"
                src={tersawy}
                alt="Mohamed Moustafa"
              />
              <h3 className={styles.teamMemberName}>Mohamed Moustafa</h3>
              <p className={styles.teamMemberRole}>Corporate Lawyer</p>
            </div>
            <div className={`${styles.teamMember} col-sm-6 col-md-4 mb-4`}>
              <img
                className={styles.teamMemberImage}
                height="200px"
                src={karim}
                alt="Karim Elgendy"
              />
              <h3 className={styles.teamMemberName}>Karim Elgendy</h3>
              <p className={styles.teamMemberRole}>Family Lawyer</p>
            </div>
          </div>
        </section>

        <section className={`${styles.testimonials} text-center my-5`}>
          <h2 className={styles.testimonialsTitle}>What Our Clients Say</h2>
          <div className={`${styles.testimonial} bg-light p-4 rounded mb-3`}>
            <p className={styles.testimonialText}>
              "The team at TYK Law Firm was incredibly professional and helped
              me navigate my case with confidence."
            </p>
          </div>
          <div className={`${styles.testimonial} bg-light p-4 rounded mb-3`}>
            <p className={styles.testimonialText}>
              "Their expertise in family law was evident, and they truly cared
              about my situation."
            </p>
          </div>
          <div className={`${styles.testimonial} bg-light p-4 rounded mb-3`}>
            <p className={styles.testimonialText}>
              "The corporate lawyer at TYK law firm was instrumental in helping
              our business navigate complex legal matters. Their expertise and
              professionalism gave us the confidence to make informed decisions.
              Highly recommended!"
            </p>
          </div>
          <div className={`${styles.testimonial} bg-light p-4 rounded`}>
            <p className={styles.testimonialText}>
              "The criminal defense lawyer at TYK law firm provided exceptional
              support during a challenging time. Their knowledge of the law and
              dedication to my case made all the difference. I felt confident
              and well-represented throughout the entire process."
            </p>
          </div>
        </section>
      </div>
    )
  );
};

export default AboutUs;
