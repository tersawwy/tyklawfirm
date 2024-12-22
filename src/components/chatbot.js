import React, { useState } from "react";
import styles from "./chatbot.module.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:7077/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { type: "bot", content: data.reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", content: "Sorry, I encountered an error." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles.chatbotWrapper}>
      {!isOpen && (
        <button
          className={styles.chatbotButton}
          onClick={() => setIsOpen(true)}
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className={styles.chatbotContainer}>
          <div className={styles.chatHeader}>
            <h3>Chat Assistant</h3>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.type === "user" ? styles.userMessage : styles.botMessage
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && <div className={styles.botMessage}>Typing...</div>}
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className={styles.input}
            />
            <button
              onClick={sendMessage}
              className={styles.sendButton}
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
