import React from "react";
import aboutMePhoto from "../../assets/me-waffles.JPG";
import Icons from "../Icons/Icons";
import "./AboutMePage.css";
import ScrollAnimation from "react-animate-on-scroll";

function AboutMePage() {
  return (
    <div className="page-container">
      <h2 className="page-title" id="user">
        about me.
      </h2>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="page-section about-me-section">
          <img
            className="about-me-photo"
            src={aboutMePhoto}
            alt="sophie holding her dog Waffles in San Francisco"
          />

          <div className="about-me-main">
            <div className="about-me-body">
              <p>
                Sophie is a frontend web developer who loves bringing ideas to
                life. Experienced in Javascript ES6 and React, she is looking
                for a fulltime position.
              </p>
              <p>
                Before making the career jump, she worked in the digital media
                industry as a video editor and producer. During her free time,
                she loves going to the dog beach and exploring the city. Sophie
                lives in Los Angeles with her corgi, Waffles.
              </p>
              <p>Email: hello@sophietsai.com</p>
            </div>
            <Icons />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default AboutMePage;
