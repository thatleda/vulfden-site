import React from "react";

import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import Button from "components/base/Button";
import GitHub from "components/svg/GitHub";

it("should render button as a link", () => {
  render(<Button href="#anchor" text="Click me" />);

  const button = screen.getByRole("button");
  expect(button.getAttribute("href")).toStrictEqual("#anchor");
  expect(button.getAttribute("rel")).toStrictEqual("noopener noreferrer");
  expect(button.getAttribute("target")).toStrictEqual("_blank");
  expect(screen.getByText("Click me")).toBeDefined();
});

it("should pass an svg", () => {
  render(<Button href="#anchor" icon={<GitHub />} text="GitHub" />);

  expect(screen.getByText("GitHub")).toBeDefined();
  expect(screen.getByTitle("GitHub icon")).toBeDefined();
});
