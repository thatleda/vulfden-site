import React from "react";

const ArrowBack: React.FC<SVGProperties> = ({
  fillColor = "var(--text-color)",
  height = "1rem",
  width = "1rem",
}) => {
  return (
    <svg
      fill={fillColor}
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow back icon</title>
      <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
    </svg>
  );
};

export default ArrowBack;
