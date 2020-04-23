import React, { useState } from "react";
// import screenshot from "../../assets/projectsImg/project-screenshot.png";
//import "../../../public/projectsImgs/";
import "./Projects.css";

function Projects(props) {
  const [hovered, setHovered] = useState(false);
  const { url, img, name } = props.item;
  const displayName = hovered && name;

  return (
    <div
      className={`project-container ${hovered && "project-container-hover"}`}
    >
      <a
        className="project-img-container"
        href={url}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          className={`project-image ${hovered && "project-image-hover"}`}
          src={img}
          alt="screenshot of project"
        />
        <p className="displayName">{displayName}</p>
      </a>
    </div>
  );
}

export default Projects;
