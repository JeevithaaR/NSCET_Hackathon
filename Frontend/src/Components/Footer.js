import React from "react";
import "../Styles/Footer.css";
function Footer() {
  return (
    <div>
      <footer>
        <div class="footer-content">
          <h3>Your Company</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </p>
          <ul class="socials">
            <li>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>© 2024 Your Company | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
