import React from "react";

import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import Button from "components/base/Button";
import GitHub from "components/svg/GitHub";

it("should render external link as a button", () => {
  render(<Button href="google.com" text="Click me" />);

  expect(screen.getByRole("button")).toHaveAttribute("href", "google.com");
  expect(screen.getByRole("button")).toHaveAttribute(
    "rel",
    "noopener noreferrer",
  );
  expect(screen.getByRole("button")).toHaveAttribute("target", "_blank");
  expect(screen.getByText("Click me")).toBeDefined();
});

it("should pass an svg", () => {
  render(<Button href="https://github.com" icon={<GitHub />} text="GitHub" />);

  expect(screen.getByText("GitHub")).toBeDefined();
  expect(screen.getByTitle("GitHub icon")).toBeDefined();
});

it("should have an accessible name", () => {
  render(<Button href="/" text="Home" />);

  expect(screen.getByRole("button")).toHaveAccessibleName("Home");
});
