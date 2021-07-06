import React from "react";
function Navbar({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1 class="topName">Taylor Smith </h1>
      <nav class="topnav">
        <ul class="topnavLinks">
          <li>
            <a href="#about" onClick={() => handlePageChange("About")}>
              About Me
            </a>
          </li>
          <li>
            <a href="#work" onClick={() => handlePageChange("Projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
              Contact
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => handlePageChange("Resume")}>
              Résumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
