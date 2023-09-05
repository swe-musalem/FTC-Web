import React from "react";
import { useSpring, animated } from "@react-spring/web";

function Number({ n }) {
  const props = useSpring({
    from: { number: 0 },
    to: { number: n },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span>{props.number.to((x) => x.toFixed(0))}</animated.span>;
}

export default Number;
