import React from "react";

const ArrowForward: React.FC<SVGProps> = ({
  width = "1rem",
  height = "1rem",
  fillColor = "var(--text-color)",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={fillColor}
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  );
};

export default ArrowForward;
