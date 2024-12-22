import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "./logo.png";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { isUserLoggedIn } = useContext(UserContext); // Access login state

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.navbarLinks}>
        <Link to="./" className={styles.navbarLink}>
          Home
        </Link>
        <Link to="./aboutus" className={styles.navbarLink}>
          About Us
        </Link>
        <Link to="./book" className={styles.navbarLink}>
          Book
        </Link>
        <Link to="./contactus" className={styles.navbarLink}>
          Contact
        </Link>
        <Link to="./plans" className={styles.navbarLink}>
          Plans
        </Link>
        <Link to="./clientstatus" className={styles.navbarLink}>
          Status
        </Link>

        {isUserLoggedIn && (
          <Link to="./yourcases" className={styles.navbarLink}>
            Your Cases
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
