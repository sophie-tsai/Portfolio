import React from "react";
import "./Projects.css";

function Projects(props) {
  const { url, img } = props.item;

  return (
    <a href={url}>
      <img className="project-image" src={img} alt="screenshot of project" />
    </a>
  );
}

export default Projects;
