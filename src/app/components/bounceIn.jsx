"use client";
import React from "react";
import { useTrail, animated } from "@react-spring/web";

const BouncingIn = ({ items, containerClass }) => {
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 180, friction: 12 }, // Adjust this for bounce effect
  });

  return (
    <div className={containerClass}>
      {trail.map((style, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default BouncingIn;
