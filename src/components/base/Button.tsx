import React from "react";

import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary";

interface ButtonProperties {
  href?: string;
  icon?: React.ReactNode;
  text: string;
  variant?: ButtonVariant;
}

const ExternalLink = styled.a<{ $variant: ButtonVariant }>`
  padding-bottom: 0.5rem;
  padding: 0.5rem 1.5rem;
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

  ${(properties) => {
    if (properties.$variant === "primary") {
      return css`
        background-color: var(--text-color);
        color: var(--background-color);
        border-color: var(--box-shadow-color);
        font-weight: 600;
      `;
    }

    if (properties.$variant === "secondary") {
      return css`
        color: var(--text-color);
        background-color: var(--box-shadow-color);
      `;
    }
  }}

  &:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    ${(properties) => {
      if (properties.$variant === "primary") {
        return css`
          border-color: var(--box-shadow-hover-color);
          background-color: var(--background-color);
        `;
      }
    }}
  }
`;

const Button: React.FC<ButtonProperties> = ({
  href,
  icon,
  text,
  variant = "secondary",
}) => {
  const hasIcon = icon !== undefined;
  return (
    <ExternalLink
      $variant={variant}
      href={href}
      rel="noopener noreferrer"
      role="button"
      target="_blank"
    >
      {hasIcon && icon}
      {text}
    </ExternalLink>
  );
};

export default Button;
