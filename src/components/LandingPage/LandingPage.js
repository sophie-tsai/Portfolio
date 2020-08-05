import React from "react";
import "./LandingPage.css";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typist from "react-typist";

function LandingPage() {
  return (
    <div className="page-container">
      <div className="page-section landing-page-section">
        <div className="body-landing">
          <h1 className="header-landing">
            <Typist startDelay={1000}>hello world.</Typist>
          </h1>
          <p className="intro-landing animated fadeInUp delay-2s">i'm sophie</p>
          <p className="title-landing animated fadeInUp delay-3s">
            a software engineer
          </p>
        </div>
        <a href="#code" className="animated infinite bounce slow icon-scroll">
          <FontAwesomeIcon icon={"chevron-down"} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
