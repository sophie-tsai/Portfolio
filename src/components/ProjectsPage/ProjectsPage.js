import React, { useState } from "react";
import Projects from "../Projects/Projects";
import "./ProjectsPage.css";
import projectsData from "../../data/projectsData";

function ProjectsPage() {
  //map out button elements
  const tech = ["all", "html", "css", "javascript", "react", "api"];
  const techButtons = tech.map((element) => (
    <button
      className="button-tech"
      value={element}
      key={element}
      onClick={(event) => handleClick(event)}
    >
      {element}
    </button>
  ));

  //map out project elements
  function mapProjectsArray(arr) {
    return arr.map((item) => <Projects key={item.id} item={item} />);
  }

  const allProjectsItems = mapProjectsArray(projectsData);

  //setting up state
  const [projectsItems, setProjectsItems] = useState(allProjectsItems);

  //filtering the array based onthe button clicked
  const filteredProjects = (query) => {
    return projectsData.filter((element) =>
      element.technologies.includes(query)
    );
  };

  //handle click
  function handleClick(event) {
    const { value } = event.target;
    if (value === "all") {
      setProjectsItems(allProjectsItems);
    } else {
      const filteredProjectsItems = mapProjectsArray(filteredProjects(value));
      setProjectsItems(filteredProjectsItems);
    }
  }

  //update projects

  return (
    <div className="page-container">
      <h2 className="page-title">projects.</h2>
      <div className="page-section">
        <div className="button-tech-container">{techButtons}</div>
        <div className="projects-container">{projectsItems}</div>
      </div>
    </div>
  );
}

export default ProjectsPage;
