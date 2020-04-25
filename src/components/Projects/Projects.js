import React, { useState } from "react";
import "./Projects.css";
import { useSpring, animated } from "react-spring";

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
      <animated.div
        class="card"
        src={img}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: prop.xys.interpolate(trans) }}
        onMouseEnter={() => setHovered(true)}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        onMouseLeave={() => setHovered(false)}
      >
        <a className="project-img-container" href={url}>
          <img
            className={`project-image ${hovered && "project-image-hover"}`}
            src={img}
            alt="screenshot of project"
          />
          <p className="displayName">{displayName}</p>
        </a>
      </animated.div>
    </div>
  );
}

export default Projects;
