'use client'; // Ensure this is a client-side component for Next.js

import React from "react";

const DocumentNotification = () => (
  <div style={{
    border: "1px solid #c4c4c4",
    borderRadius: "8px",
    padding: "24px",
    maxWidth: "450px",
    background: "#fafbfc"
  }}>
    <h2 style={{ marginTop: 0, fontWeight: "bold" }}>
      Master Roofers
    </h2>
    <div style={{ color: "#767676", marginBottom: "16px" }}>
      May 27, 2025
    </div>
    <h3>You have a document awaiting your review</h3>
    <a
      href="link"
      style={{
        display: "inline-block",
        margin: "16px 0",
        padding: "10px 18px",
        background: "#1a73e8",
        color: "#fff",
        borderRadius: "4px",
        textDecoration: "none",
        fontWeight: 500
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
);

export default DocumentNotification;
