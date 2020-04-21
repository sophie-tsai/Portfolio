import React from "react";
import Projects from "../Projects/Projects";
import "./ProjectsPage.css";
import projectsData from "../../data/projectsData";

function ProjectsPage() {
  const projectsItems = projectsData.map((item) => (
    <Projects key={item.id} item={item} />
  ));

  return (
    <div className="page-container">
      <h2 className="page-title">projects.</h2>
      <div className="page-section">
        <p className="projects-tech">
          show all - html - css - javascript - react - live api
        </p>
        <div className="projects-container">{projectsItems}</div>
      </div>
    </div>
  );
}

export default ProjectsPage;
