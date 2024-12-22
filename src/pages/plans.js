import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./plans.module.css";

const PaymentPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayNow = () => {
    navigate("/pay");
  };

  return (
    (document.title = "Our Plans | TYK Law Firm") && (
      <div className={styles.paymentPage}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Choose Your Plan</h1>
          <p className={styles.heroDescription}>
            Select the best plan that fits your legal needs.
          </p>
        </section>

        <section className={styles.plans}>
          <div
            className={`${styles.plan} ${
              selectedPlan === "basic" ? styles.planSelected : ""
            }`}
            onClick={() => handleSelectPlan("basic")}
            onMouseEnter={(e) =>
              e.currentTarget.classList.add(styles.planHover)
            }
            onMouseLeave={(e) =>
              e.currentTarget.classList.remove(styles.planHover)
            }
          >
            <h2 className={styles.planTitle}>Basic Plan</h2>
            <p className={styles.price}>$100</p>
            <p className={styles.description}>
              Perfect for basic consultations and advice.
            </p>
            <button
              className={styles.btn}
              onMouseEnter={(e) =>
                e.currentTarget.classList.add(styles.btnHover)
              }
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove(styles.btnHover)
              }
            >
              Select Plan
            </button>
          </div>

          <div
            className={`${styles.plan} ${
              selectedPlan === "standard" ? styles.planSelected : ""
            }`}
            onClick={() => handleSelectPlan("standard")}
            onMouseEnter={(e) =>
              e.currentTarget.classList.add(styles.planHover)
            }
            onMouseLeave={(e) =>
              e.currentTarget.classList.remove(styles.planHover)
            }
          >
            <h2 className={styles.planTitle}>Standard Plan</h2>
            <p className={styles.price}>$250</p>
            <p className={styles.description}>
              Includes contract review and legal support.
            </p>
            <button
              className={styles.btn}
              onMouseEnter={(e) =>
                e.currentTarget.classList.add(styles.btnHover)
              }
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove(styles.btnHover)
              }
            >
              Select Plan
            </button>
          </div>

          <div
            className={`${styles.plan} ${
              selectedPlan === "premium" ? styles.planSelected : ""
            }`}
            onClick={() => handleSelectPlan("premium")}
            onMouseEnter={(e) =>
              e.currentTarget.classList.add(styles.planHover)
            }
            onMouseLeave={(e) =>
              e.currentTarget.classList.remove(styles.planHover)
            }
          >
            <h2 className={styles.planTitle}>Premium Plan</h2>
            <p className={styles.price}>$500</p>
            <p className={styles.description}>
              Comprehensive services, including full legal representation.
            </p>
            <button
              className={styles.btn}
              onMouseEnter={(e) =>
                e.currentTarget.classList.add(styles.btnHover)
              }
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove(styles.btnHover)
              }
            >
              Select Plan
            </button>
          </div>
        </section>

        {selectedPlan && (
          <div className={styles.confirmation}>
            <p>
              You have selected the{" "}
              {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}{" "}
              Plan.
            </p>
          </div>
        )}

        <div className={styles.payNowWrapper}>
          <button className={styles.payNowBtn} onClick={handlePayNow}>
            Pay Now
          </button>
        </div>
      </div>
    )
  );
};

export default PaymentPage;
