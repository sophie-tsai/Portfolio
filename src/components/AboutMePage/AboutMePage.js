import React from "react";
import aboutMePhoto from "../../assets/me-waffles.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutMePage.css";

function AboutMePage() {
  return (
    <div className="page-container">
      <h2 className="page-title">about me.</h2>
      <div className="about-me-section">
        <img
          className="about-me-photo"
          src={aboutMePhoto}
          alt="sophie holding her dog Waffles in San Francisco"
        />
        <div className="about-me-main">
          <p className="about-me-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl
            nisi scelerisque eu. Turpis egestas sed tempus urna et. Ut placerat
            orci nulla pellentesque dignissim enim. Ut tristique et egestas
            quis. A arcu cursus vitae congue. Eu facilisis sed odio morbi quis
            commodo odio aenean sed. Consectetur a erat nam at lectus urna duis
            convallis convallis. Amet est placerat in egestas erat. Ut tristique
            et egestas quis ipsum. At quis risus sed vulputate. Porta non
            pulvinar neque laoreet suspendisse interdum consectetur. Quam
            vulputate dignissim suspendisse in est ante in nibh. Cursus turpis
            massa tincidunt dui. Viverra suspendisse potenti nullam ac tortor
            vitae. Cursus euismod quis viverra nibh cras pulvinar. Velit
            dignissim sodales ut eu sem integer vitae. Ac tincidunt vitae semper
            quis lectus nulla at. Mattis rhoncus urna neque viverra. Adipiscing
            tristique risus nec feugiat. Sit amet nisl suscipit adipiscing
            bibendum est ultricies integer. Platea dictumst vestibulum rhoncus
            est pellentesque elit ullamcorper dignissim cras. Vulputate sapien
            nec sagittis aliquam malesuada. Eu scelerisque felis imperdiet proin
            fermentum leo. Posuere morbi leo urna molestie at elementum eu
            facilisis sed. Porttitor eget dolor morbi non arcu. Enim ut tellus
            elementum sagittis vitae et leo. Lacinia quis vel eros donec ac.
            Ullamcorper dignissim cras tincidunt lobortis feugiat. Pharetra
            magna ac placerat vestibulum lectus mauris ultrices eros. Varius
            duis at consectetur lorem donec.
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
