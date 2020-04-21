import React from "react";
import Projects from "../Projects/Projects";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div className="page-container">
      <h2 className="page-title">projects.</h2>
      <div className="projects-container">
        <Projects />
      </div>
    </div>
  );
}

export default ProjectsPage;
