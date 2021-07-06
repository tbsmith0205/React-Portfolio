import React from "react";

export default function Resume() {
  return (
    <div>
      <h1>Résumé</h1>
      <a href="../assets/img/tbs_resume.pdf" download>
        Download my Résumé
      </a>
      <h2>Front-end Skills:</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>
      <h2>Back-end Skills:</h2>
      <ul>
        <li>Javascript</li>
        <li>NodeJS</li>
        <li>SQL</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}
