import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

function Header() {
  const icons = ["code", "laptop-code", "user", "envelope"];
  const displayIcons = icons.map((icon) => (
    // eslint-disable-next-line react/jsx-key
    <a href={`#${icon}`}>
      <FontAwesomeIcon className="icons-header" key={icon} icon={icon} />
    </a>
  ));

  return <div className="container-header">{displayIcons}</div>;
}

export default Header;
