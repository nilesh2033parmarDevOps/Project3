import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [status, setStatus] = useState("Running");
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleStatus = () => {
    setStatus(status === "Running" ? "Down" : "Running");
  };

  return (
    <div className="container">
      <h1>🚀 DevOps Dashboard</h1>

      <div className="card">
        <h2>Status: 
          <span className={status === "Running" ? "green" : "red"}>
            {status}
          </span>
        </h2>

        <h3>⏰ Time: {time}</h3>

        <button onClick={toggleStatus}>
          Toggle Status
        </button>
      </div>
    </div>
  );
}