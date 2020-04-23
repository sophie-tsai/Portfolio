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
    "adobe cc",
  ];
  const displaySkills = skills.map((skill) => (
    <p className="skills-text">{skill}</p>
  ));

  return (
    <div className="page-container">
      <h2 className="page-title">skills.</h2>
      <div className="page-section skills-section">{displaySkills}</div>
    </div>
  );
}

export default SkillsPage;
