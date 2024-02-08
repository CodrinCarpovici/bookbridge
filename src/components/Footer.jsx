import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <p>© 2024 Book Bridge. All rights reserved.</p>
        <div className="footer-link-container">
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/contact" className="footer-link">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
