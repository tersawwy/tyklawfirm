import React from "react";
import styles from './footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 
import { faSmile } from '@fortawesome/free-regular-svg-icons'; 
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      
   
      <div className={styles.iconz}>
      <p className={styles.followz}>Follow Us:</p>
      
      <div className={styles.icons}><a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" inverse /></a>
      <a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" inverse /></a>
      <a href="https://www.x.com" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" inverse /></a></div></div>
      <div className={styles.content}>
        <p className={styles.copy}>© 2024 TYK Law Firm</p>
        <p className={styles.copy}>All rights reserved.</p>
       
      </div>
    </footer>
    </>
  );
}

export default Footer;
