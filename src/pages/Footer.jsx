import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <div className="body">
            <h5>eShop</h5>
            <p style={{ width: "100%" }}>
              Subscribe to our email for latest product information
            </p>
            <input placeholder="Email " />
            <button id="subs-button">Subscribe</button>
          </div>
          <div className="body">
            <h5>Help</h5>
            <p>FAQ's</p>
            <p>Track Order</p>
            <p>Return Order</p>
            <p>Cancel Order</p>
            <p>Warranty Info</p>
          </div>
          <div className="body">
            <h5>Policies</h5>
            <p>Return Policy</p>
            <p>Sitemap</p>
            <p>Security</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
          <div className="body">
            <h5>Company</h5>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Service Centers</p>
            <p>Careers</p>
            <p>Affiliates</p>
          </div>
        </div>
        <hr id="divider" />
        <div className="copyright">
          <p>2024 | All Rights Reserved. Built by | Lateef Mushtaq</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
