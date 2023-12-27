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
  background-color: ${(props) =>
    props.$variant === "primary"
      ? css`var(--primary-color)`
      : css`var(--background-color)`};
  color: ${(props) =>
    props.$variant === "primary"
      ? css`var(--background-color)`
      : css`var(--primary-color)`};
  padding-bottom: 0.5rem;
  padding: 0.25rem 1.25rem;
  width: auto;
  height: auto;
  border-radius: var(--border-radius);
  transition: 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  transition-property: background-color;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: solid 2px var(--primary-color);
  border-color: ${(props) =>
    props.$variant === "primary"
      ? css`var(--background-color)`
      : css`var(--primary-color)`};

  &:hover {
    background-color: ${(props) =>
      props.$variant === "primary"
        ? css`var(--background-color)`
        : css`var(--secondary-color)`};
    color: var(--text-color);
    ${(props) => {
      if (props.$variant === "primary") {
        return css`
          border-color: var(--card-background-color);
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
    >
      {hasIcon && getSVGByName(icon)}
      {text}
    </ExternalLink>
  );
};

export default Button;
