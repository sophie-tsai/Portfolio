import React from "react";
// import screenshot from "../../assets/projectsImg/project-screenshot.png";
//import "../../../public/projectsImgs/";
import "./Projects.css";

function Projects(props) {
  const { url, img } = props.item;

  return (
    <div className="project-container">
      <a href={url}>
        <img className="project-image" src={img} alt="screenshot of project" />
      </a>
    </div>
  );
}

export default Projects;
