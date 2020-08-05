import React from "react";
import "./SkillsPage.css";
import ScrollAnimation from "react-animate-on-scroll";

function SkillsPage() {
  const skills = [
    "html",
    "css",
    "scss",
    "responsive web design",
    "wireframing",
    "bootstrap",
    "javascript es6+",
    "typescript",
    "react",
    "redux",
    "shopify",
    "apis",
    "libraries",
    "npm",
    "git",
    "github",
    "firebase",
    "mongoDB",
    "mongoose",
    "express",
    "node.js",
    "heroku",
    "axios",
    "graphQL",
    "postman",
    "netlify",
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
