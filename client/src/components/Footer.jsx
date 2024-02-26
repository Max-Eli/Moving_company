// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-column bname">
          <h4>Sunny Movers</h4>
          <p>609-787-1878</p>
        </div>
        <div className="footer-column">
          <h4>Cities We Serve</h4>
          <ul>
            <li>Miami</li>
            <li>Fort Lauderdale</li>
            <li>Hollywood</li>
            <li>Pompano Beach</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Boca Raton</li>
            <li>West Palm Beach</li>
            <li>Delray Beach</li>
            <li>Boynton Beach</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Coral Springs</li>
            <li>Miramar</li>
            <li>Pembroke Pines</li>
            <li>Davie</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sunny Movers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
