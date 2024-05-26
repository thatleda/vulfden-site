import React from "react";
import { expect, it } from "vitest";

import Pagination from "components/base/Pagination";

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

  expect(screen.queryAllByRole("link")).toHaveLength(0);
});

it("should link to the correct pages from the last one", () => {
  render(
    <Pagination
      currentPage={2}
      hasNextPage={false}
      hasPreviousPage={true}
      totalPages={2}
    />
  );

  expect(
    screen.getByLabelText("Previous page").getAttribute("href")
  ).toStrictEqual("/ramblings");
  expect(
    screen.getByLabelText("Current page, page 2").getAttribute("href")
  ).toStrictEqual("/ramblings/2");
});

it("should link to the correct pages from the first one", () => {
  render(
    <Pagination
      currentPage={1}
      hasNextPage={true}
      hasPreviousPage={false}
      totalPages={2}
    />
  );

  expect(screen.getByLabelText("Next page").getAttribute("href")).toStrictEqual(
    "/ramblings/2"
  );
  expect(
    screen.getByLabelText("Current page, page 1").getAttribute("href")
  ).toStrictEqual("/ramblings");
});

it("should show the current page as selected but not disabled", () => {
  render(
    <Pagination
      currentPage={2}
      hasNextPage={false}
      hasPreviousPage={true}
      totalPages={2}
    />
  );

  const currentPageLink = screen.getByLabelText("Current page, page 2");

  expect(currentPageLink.getAttribute("selected")).toBeDefined();
  expect(currentPageLink.getAttribute("disabled")).toBeNull();
});

it("should disable previous page if no previous page available", () => {
  render(
    <Pagination
      currentPage={1}
      hasNextPage={true}
      hasPreviousPage={false}
      totalPages={2}
    />
  );

  expect(
    screen.getByLabelText("Previous page").getAttribute("disabled")
  ).toBeDefined();
});

it("should disable next page if no next page available", () => {
  render(
    <Pagination
      currentPage={1}
      hasNextPage={false}
      hasPreviousPage={true}
      totalPages={2}
    />
  );

  expect(
    screen.getByLabelText("Next page").getAttribute("disabled")
  ).toBeDefined();
});
