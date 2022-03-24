import React from "react";

export default function Svg(props) {
  const { d, fill } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill={fill} fillOpacity="1" d={d}></path>
    </svg>
  );
}
