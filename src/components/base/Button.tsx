import React from "react";
import styled, { css } from "styled-components";

import Discord from "components/svg/Discord";
import GitHub from "components/svg/GitHub";
import LinkedIn from "components/svg/LinkedIn";
import Mail from "components/svg/Mail";

type ButtonVariant = "primary" | "secondary" | "nav";

interface ButtonProps {
  text: string;
  icon?: SVGName;
  variant?: ButtonVariant;
  href?: string;
}

const ExternalLink = styled.a<{ $variant: ButtonVariant }>`
  padding-bottom: 0.5rem;
  padding: 0.25rem 1.25rem;
  width: auto;
  height: auto;
  border-radius: var(--border-radius);
  transition: 0.25s ease-in-out;
  transition-property: background-color;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: solid 0.002rem;

  ${(props) => {
    if (props.$variant === "primary") {
      return css`
        background-color: var(--text-color);
        color: var(--background-color);
        border-color: var(--background-color);
        font-weight: 600;
      `;
    }

    if (props.$variant === "secondary") {
      return css`
        background-color: var(--background-color);
        color: var(--text-color);
        border-color: var(--card-background-color);
      `;
    }
  }}

  &:hover {
    background-color: var(--secondary-color);
    color: var(--text-color);
    ${(props) => {
      if (props.$variant === "primary") {
        return css`
          border-color: var(--card-background-color);
          background-color: var(--background-color);
        `;
      }
    }}
  }
`;

const getSVGByName = (name: SVGName): React.ReactNode => {
  switch (name) {
    case "Discord":
      return <Discord />;
    case "LinkedIn":
      return <LinkedIn />;
    case "GitHub":
      return <GitHub />;
    default:
      return <Mail />;
  }
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  variant = "secondary",
  href,
}) => {
  const hasIcon = icon !== undefined;
  return (
    <ExternalLink
      $variant={variant}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
    >
      {hasIcon && getSVGByName(icon)}
      {text}
    </ExternalLink>
  );
};

export default Button;
