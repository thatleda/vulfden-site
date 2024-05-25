import React from "react";
import { expect, it } from "vitest";

import Pagination from "./Pagination";

import { render, screen } from "@testing-library/react";

it("should not show a component if totalPages = 1", () => {
  render(
    <Pagination
      currentPage={1}
      hasNextPage={true}
      hasPreviousPage={true}
      totalPages={1}
    />
  );

  expect(screen.queryAllByRole('link')).toHaveLength(0)
});

it("should have disabled previous page if no previous page available", () => {
  render(
    <Pagination
      currentPage={1}
      hasNextPage={true}
      hasPreviousPage={false}
      totalPages={2}
    />
  );

  screen.debug()
});
