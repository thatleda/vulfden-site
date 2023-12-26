import React from "react";

const ArrowBack: React.FC<SVGProps> = ({
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
      <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
    </svg>
  );
};

export default ArrowBack;
