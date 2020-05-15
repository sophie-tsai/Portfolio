import React, { useState } from "react";
import "./Projects.css";
import "animate.css";
import { useSpring, animated } from "react-spring";
import ScrollAnimation from "react-animate-on-scroll";

function Projects(props) {
  const [hovered, setHovered] = useState(false);
  const { url, img, name } = props.item;
  const displayName = hovered && name;

  /* animation */
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 75,
    (x - window.innerWidth / 2) / 75,
    1.01,
  ];
  const trans = (x, y, s) =>
    `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [prop, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 120, friction: 14 },
  }));

  return (
    <div
      className={
        `project-container` /*${hovered && "project-container-hover"}*/
      }
    >
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <animated.div
          className="card"
          src={img}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => {
            set({ xys: [0, 0, 1] });
            setHovered(false);
          }}
          style={{ transform: prop.xys.interpolate(trans) }}
          onMouseEnter={() => setHovered(true)}
        >
          <a
            className="project-img-container"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`project-image ${hovered && "project-image-hover"}`}
              src={img}
              alt="screenshot of project"
            />
            <p className="displayName">{displayName}</p>
          </a>
        </animated.div>
      </ScrollAnimation>
    </div>
  );
}

export default Projects;
