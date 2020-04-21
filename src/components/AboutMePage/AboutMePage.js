import React from "react";
import aboutMePhoto from "../../assets/me-waffles.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutMePage.css";

function AboutMePage() {
  return (
    <div className="page-container">
      <h2 className="page-title">about me.</h2>
      <div className="page-section about-me-section">
        <img
          className="about-me-photo"
          src={aboutMePhoto}
          alt="sophie holding her dog Waffles in San Francisco"
        />
        <div className="about-me-main">
          <p className="about-me-body">
            Sophie is a frontend web developer who loves bringing ideas to life.
            Experienced in Javascript ES6 and React, she is looking for a
            fulltime position.
            <br /> <br />
            Before making the career jump, she worked in the digital media
            industry as a video editor and a producer. During her free time, she
            loves going to the dog beach and trying new resturants. Sophie lives
            in Los Angeles with her corgi, Waffles.
          </p>
          <div className="icons-social-media">
            <a href="https://github.com/sophie-tsai">
              <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
            </a>
            <a href="https://www.linkedin.com/in/sophietsai/">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="3x" />
            </a>
            <a href="https://www.instagram.com/corgowaffles/">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
