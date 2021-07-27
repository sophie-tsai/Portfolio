import React from "react";
import "./SkillsPage.css";
import ScrollAnimation from "react-animate-on-scroll";

function SkillsPage() {
  const skills = [
    // libraries
    "next.js",
    "apollo",
    "react",
    "redux",

    // languages
    "javascript es6+",
    "typescript",
    "python",
    "graphQL",

    // design
    "html",
    "css",
    "scss",
    "responsive web design",
    "bootstrap",
    "bulma",

    // testing
    "testrail",
    "behave",
    "cucumber",
    "selenium",
    "jest",
    "react testing library",

    // tools
    "git",
    "github",
    "gitlab (ci/cd)",

    // backend
    "dynamodb",
    "mongoDB",
    "express",
    "node.js",

    // software / platforms
    "sentry",
    "launchdarkly",
    "firebase",
    "shopify",
    "heroku",
    "netlify",
    "adobe creative cloud",
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
