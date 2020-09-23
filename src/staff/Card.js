import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

function Card(props) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(400px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 30, tension: 500, friction: 60 },
  });
  console.log(props.image);
  return (
    <div className="card" onMouseEnter={() => set((state) => !state)}>
      <a.div
        className="c back"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <h1>{props.name}</h1>
        <div className="imageWrap">
          <img src={props.image} alt={props.name} />
        </div>

        <h2>{props.role}</h2>
      </a.div>
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      ></a.div>
    </div>
  );
}

export default Card;
