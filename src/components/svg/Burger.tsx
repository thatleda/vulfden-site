import React from "react";

const Burger: React.FC<SVGProps> = ({
  width = "1rem",
  height = "1rem",
  fillColor = "var(--text-color)",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width={width}
      height={height}
      fill={fillColor}
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
};

export default Burger;
