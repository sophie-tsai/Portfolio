import React from "react";
import "./SkillsPage.css";
import ScrollAnimation from "react-animate-on-scroll";

function SkillsPage() {
  const skills = [
    "html",
    "css",
    "responsive web design",
    "wireframing",
    "bootstrap",
    "javascript es6",
    "react 16.8",
    "redux",
    "third-party apis & libraries",
    "npm",
    "git",
    "github",
    "firebase",
    "mongoDB",
    "mongoose",
    "express",
    "node.js",
    "heroku",
    "postman",
    "adobe creative cloud",
    "virtual studio code",
  ];
  const displaySkills = skills.map((skill) => (
    <li className="skills-text" key={skill}>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        {skill}
      </ScrollAnimation>
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
