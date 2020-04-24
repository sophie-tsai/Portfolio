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
  ];
  const displaySkills = skills.map((skill) => (
    // eslint-disable-next-line react/jsx-key
    <p className="skills-text">{skill}</p>
  ));

  return (
    <div className="page-container" id="code">
      <h2 className="page-title">skills.</h2>
      <div className="page-section skills-section">{displaySkills}</div>
    </div>
  );
}

export default SkillsPage;
