import React from "react";

const Burger: React.FC<SVGProperties> = ({
  fillColor = "var(--text-color)",
  height = "1rem",
  width = "1rem",
}) => {
  return (
    <svg
      fill={fillColor}
      style={{ height, width }}
      viewBox="0 -960 960 960"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Burger icon</title>
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
};

export default Burger;
