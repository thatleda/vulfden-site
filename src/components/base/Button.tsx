import React from "react";
import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "nav";

type ButtonProps = {
  text: string;
  icon?: string;
  variant?: ButtonVariant;
  href?: string;
};

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
        : css`var(--primary-color)`};
    color: ${(props) =>
      props.$variant === "primary"
        ? css`var(--text-color)`
        : css`var(--background-color)`};
    ${(props) => {
      if (props.$variant === "primary") {
        return css`
          border-color: var(--text-color);
        `;
      }
    }}
  }
`;

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  variant = "secondary",
  href,
}) => {
  return (
    <ExternalLink
      $variant={variant}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </ExternalLink>
  );
};

export default Button;
