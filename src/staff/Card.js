import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import "./styles.css";

function Card() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(300px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 30, tension: 500, friction: 60 },
  });
  return (
    <div onMouseEnter={() => set((state) => !state)}>
      <a.div
        class="c back"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      />
      <a.div
        class="c front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      />
    </div>
  );
}

export default Card;
