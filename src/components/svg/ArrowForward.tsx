import React from "react";

const ArrowForward: React.FC<SVGProperties> = ({
  height = "1rem",
  width = "1rem",
}) => {
  return (
    <svg
      style={{ height, width }}
      viewBox="0 -960 960 960"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow forward icon</title>
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  );
};

export default ArrowForward;
