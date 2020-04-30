import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Icons.css";

function Icons() {
  return (
    <div className="icons-social-media">
      <a href="https://github.com/sophie-tsai">
        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
      </a>
      <a className="middle-icon" href="https://www.linkedin.com/in/sophietsai/">
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
      </a>
      <a href="https://www.instagram.com/corgowaffles/">
        <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
      </a>
    </div>
  );
}

export default Icons;
