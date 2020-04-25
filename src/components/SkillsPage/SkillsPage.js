import React from "react";
import "./SkillsPage.css";

function SkillsPage() {
  const skills = [
    "html",
    "css",
    "bootstrap",
    "javascript es6",
    "react",
    "api",
    "npm",
    "git",
    "github",
    "adobe creative cloud",
    "virtual studio code",
  ];
  const displaySkills = skills.map((skill) => (
    <li className="skills-text" key={skill}>
      {skill}
    </li>
  ));

  return (
    <div className="page-container" id="code">
      <h2 className="page-title">skills.</h2>
      <div className="page-section">
        <ul className="skills-body">{displaySkills}</ul>
      </div>
    </div>
  );
}

export default SkillsPage;
