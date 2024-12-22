import React, { useEffect, useState } from "react";
import styles from "./formpage.module.css";
import bgg from "./L.jpg";
import axios from "axios";
import config from "./config';

function validateInput(value, validator) {
  return validator.test(value);
}

function Form() {
  document.title = "Form";
  const [lawyer, setLawyer] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lawyerName = params.get("lawyer");
    if (lawyerName) {
      setLawyer(lawyerName);
    }
  }, []);

  const validators = {
    name: /^[a-zA-Z\s]+$/,
    phone: /^\d{11}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorMessages = {};

    if (!validateInput(name, validators.name)) {
      errorMessages.name = "Please enter a valid name";
    }

    if (!validateInput(phone, validators.phone)) {
      errorMessages.phone = "Please enter a valid phone number";
    }

    if (!validateInput(email, validators.email)) {
      errorMessages.email = "Please enter a valid email address";
    }

    setErrors(errorMessages);

    if (Object.keys(errorMessages).length === 0) {
      try {
      
const response = await axios.post(`${config.API_URL}/cases`, {
  lawyer: lawyer,
  name: name,
  number: phone,
  email: email,
  message: message,
});

        if (response.data.ticketno) {
          alert(
            `Form submitted! Your Ticket Number is: ${response.data.ticketno}`
          );
          // Reset form
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          setErrors({});
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <img src={bgg} alt="Background" className={styles.backgroundImage} />
        <div className={styles.formContainer}>
          <h1 className={styles.formHeading}>Contact a Lawyer</h1>
          <form onSubmit={handleSubmit} id="myForm">
            <label htmlFor="lawyer" className={styles.formLabel}>
              Selected Lawyer:
            </label>
            <input
              type="text"
              id="lawyer"
              name="lawyer"
              value={lawyer}
              readOnly
              className={styles.formInput}
            />

            <label htmlFor="name" className={styles.formLabel}>
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.formInput}
            />
            {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}

            <label htmlFor="phone" className={styles.formLabel}>
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className={styles.formInput}
            />
            {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}

            <label htmlFor="email" className={styles.formLabel}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.formInput}
            />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

            <label htmlFor="message" className={styles.formLabel}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={styles.formTextarea}
            />

            <button type="submit" className={styles.formButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
