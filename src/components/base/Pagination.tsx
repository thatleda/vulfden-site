import React from "react";

import { Link } from "gatsby";

import styled, { css } from "styled-components";

import ArrowBack from "components/svg/ArrowBack";
import ArrowForward from "components/svg/ArrowForward";

interface PaginationProperties {
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalPages: number;
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`;

const PageButton = styled(Link)<{ disabled: boolean; selected: boolean }>`
  padding: 1rem;
  color: var(--primary-color);
  background-color: var(--tertiary-color);
  ${(properties) =>
    properties.selected &&
    css`
      pointer-events: none;
      font-weight: 700;
      background-color: var(--background-color);
    `}

  ${(properties) =>
    properties.disabled &&
    css`
      pointer-events: none;
      background-color: var(--background-color);
    `}
`;

const Pagination: React.FC<PaginationProperties> = ({
  currentPage,
  hasNextPage,
  hasPreviousPage,
  totalPages,
}) => {
  const prefix = "/ramblings";

  if (totalPages === 1) {
    return;
  }
  return (
    <nav aria-label="Page navigation" role="navigation">
      <Wrapper>
        <li>
          <PageButton
            aria-label="Previous page"
            disabled={!hasPreviousPage}
            rel="prev"
            selected={false}
            to={currentPage === 2 ? prefix : `${prefix}/${currentPage - 1}`}
          >
            <ArrowBack />
          </PageButton>
        </li>
        <li>
          <PageButton
            aria-current="page"
            aria-label={`Current page, page ${currentPage}`}
            disabled={false}
            selected={true}
            to={currentPage === 1 ? prefix : `${prefix}/${currentPage}`}
          >
            {currentPage}
          </PageButton>
        </li>
        <li>
          <PageButton
            aria-label="Next page"
            disabled={!hasNextPage}
            rel="next"
            selected={false}
            to={`${prefix}/${currentPage + 1}`}
          >
            <ArrowForward />
          </PageButton>
        </li>
      </Wrapper>
    </nav>
  );
};

export default Pagination;
