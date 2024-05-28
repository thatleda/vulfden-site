import React from "react";

import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import Contact from "components/Contact";

it("should display all icons", () => {
  render(<Contact />);

  expect(screen.getByText(/to communicate or collaborate/)).toBeDefined();
  expect(screen.getByTitle("Mail envelope icon")).toBeDefined();
  expect(screen.getByTitle("Discord icon")).toBeDefined();
  expect(screen.getByTitle("GitHub icon")).toBeDefined();
  expect(screen.getByTitle("LinkedIn icon")).toBeDefined();
});

it("should contain email link", () => {
  render(<Contact />);

  expect(screen.getByText("leda@hey.com")).toHaveAttribute(
    "href",
    "mailto:leda@hey.com",
  );
});
