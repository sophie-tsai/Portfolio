import React, { useState, useEffect } from "react";
import Projects from "../Projects/Projects";
import "./ProjectsPage.css";
import projectsData from "../../data/projectsData";

function ProjectsPage() {
  /* Setup */
  const [activeTech, setActiveTech] = useState("all");
  const { techCategories, projects } = projectsData;
  let activeProjects = getActiveProjects();

  useEffect(() => {}, [activeTech]);

  /* Functions */
  function getActiveProjects() {
    if (activeTech === "all") {
      return projects;
    }

    return projects.filter((project) =>
      project.technologies.includes(activeTech)
    );
  }

  function handleClick(event) {
    const { value } = event.target;
    setActiveTech(value);
  }

  /* View */
  const techButtons = techCategories.map((element) => (
    <button
      className={`button-tech ${element === activeTech && "button-active"}`}
      value={element}
      key={element}
      onClick={(event) => handleClick(event)}
    >
      {element}
    </button>
  ));

  function createProjectComponents() {
    return activeProjects.map((item) => <Projects key={item.id} item={item} />);
  }

  return (
    <div className="page-container" id="laptop-code">
      <h2 className="page-title">projects.</h2>
      <div className="page-section projects-section">
        <div className="button-tech-container">{techButtons}</div>
        <div className="projects-container">{createProjectComponents()}</div>
      </div>
    </div>
  );
}

export default ProjectsPage;
