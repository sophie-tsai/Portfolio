import React from "react";
import screenshot from "../../assets/project-screenshot.png";
import "./Projects.css";

function Projects() {
  return (
    <img
      className="project-image"
      src={screenshot}
      alt="screenshot of project"
    />
  );
}

export default Projects;
