

import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>© 2024 Book Bridge. All rights reserved.</p>
        <div style={linkContainerStyle}>
          <a href="/privacy-policy" style={linkStyle}>
            Privacy Policy
          </a>
          <a href="/contact" style={linkStyle}>
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  background: "#333",
  color: "white",
  textAlign: "center",
  padding: "10px 0",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const linkContainerStyle = {
  marginTop: "10px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 10px",
};

export default Footer;
