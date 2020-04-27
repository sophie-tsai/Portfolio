import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import "animate.css";

function Header() {
  const icons = ["code", "laptop-code", "user", "envelope"];
  const displayIcons = icons.map((icon) => (
    <li key={icon}>
      <a href={`#${icon}`}>
        <FontAwesomeIcon className="icons" icon={icon} />
      </a>
    </li>
  ));

  return (
    <div className="container-header">
      <ul className="header-icons animated fadeIn">{displayIcons}</ul>
    </div>
  );
}

export default Header;
