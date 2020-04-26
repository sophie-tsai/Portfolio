import React from "react";
import "./LandingPage.css";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LandingPage() {
  return (
    <div className="page-container">
      <div className="page-section landing-page-section">
        <div className="body-landing">
          <h1 className="header-landing">hello world.</h1>
          <p className="intro-landing">i'm sophie</p>
          <p className="title-landing">a frontend web developer</p>
        </div>
        <span className="animated infinite bounce slow icon-scroll">
          <FontAwesomeIcon icon={"chevron-down"} size="2x" />
        </span>
      </div>
    </div>
  );
}

export default LandingPage;
