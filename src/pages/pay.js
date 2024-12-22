import React, { useState } from "react";
import styles from "./pay.module.css";

function Pay() {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const cardNumberRegex = /^\d{16}$/;
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvvRegex = /^\d{3}$/;
  const nameRegex = /^[a-zA-Z]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["name", "cardNumber", "expiry", "cvv"];
    const errors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = "Required";
      }
    });

    if (Object.keys(errors).length > 0) {
      alert("Please fill in all required fields");
      return;
    }

    if (!cardNumberRegex.test(formData.cardNumber)) {
      alert("Invalid card number");
      return;
    }

    if (!expiryRegex.test(formData.expiry)) {
      alert("Invalid expiry date");
      return;
    }

    if (!cvvRegex.test(formData.cvv)) {
      alert("Invalid CVV");
      return;
    }

    if (!nameRegex.test(formData.name)) {
      alert("Invalid name");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Payment successfully processed");
  };

  return (
    (document.title = "Payment | TYK Law Firm") && (
      <div className={styles.paymentContainer}>
        <h1 className={styles.title}>Payment Page</h1>
        <form className={styles.paymentForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="cardNumber">
              Credit Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className={styles.input}
              placeholder="1234567898765432"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength="16"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="expiry">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              className={styles.input}
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              maxLength="5"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="cvv">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className={styles.input}
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
              maxLength="3"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <button
              type="submit"
              className={styles.submitButton}
              onMouseEnter={(e) =>
                e.target.classList.add(styles.submitButtonHover)
              }
              onMouseLeave={(e) =>
                e.target.classList.remove(styles.submitButtonHover)
              }
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    )
  );
}

export default Pay;
