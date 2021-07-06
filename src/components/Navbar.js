import React from "react";
function Navbar({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1 class="topName">Taylor Smith </h1>
      <nav class="topnav">
        <ul class="topnavLinks">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="./assets/img/tbs_resume.pdf" target="_blank">
              Résumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
