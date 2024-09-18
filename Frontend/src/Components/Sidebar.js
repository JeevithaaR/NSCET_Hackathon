import React from "react";
import "../Styles/Sidebar.css";

function Sidebar() {
  return (
      <header>
        <nav class="navbar">
          <div class="logo">YourLogo</div>
          <ul class="nav-links">
            <li>
              <a href="#home">LOGO</a>
            </li>
            <li>
              <a href="#about">Dashboard</a>
            </li>
            <li>
              <a href="#services">Report</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </nav>
      </header>
  
  );
}

export default Sidebar;
