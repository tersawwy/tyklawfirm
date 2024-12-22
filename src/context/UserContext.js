import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(() => {
    // Initialize email from localStorage if available
    return localStorage.getItem("userEmail") || "";
  });

  // Optional: Update localStorage when email changes
  useEffect(() => {
    if (userEmail) {
      localStorage.setItem("userEmail", userEmail);
    } else {
      localStorage.removeItem("userEmail");
    }
  }, [userEmail]);

  // Optional: Add a logout function
  const logout = () => {
    setUserLoggedIn(false);
    setUserEmail("");
    localStorage.removeItem("userEmail");
  };

  return (
    <UserContext.Provider
      value={{
        isUserLoggedIn,
        setUserLoggedIn,
        userEmail,
        setUserEmail,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
