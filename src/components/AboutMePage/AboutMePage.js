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
                Sophie is a software engineer based in Los Angeles. She loves
                all things Javascript and React.
              </p>
              <p>
                Fun fact, prior to making the jump to software engineering, she
                worked in the digital media industry as a video editor &
                producer. During her free time, she enjoys going to dog beaches
                with her corgi, Waffles, and pretending she will cook all the
                recipes she has bookmarked.
              </p>

              <p>hello@sophietsai.com</p>
            </div>
            <Icons />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default AboutMePage;
