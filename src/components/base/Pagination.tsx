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

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.ul`
  padding-inline-start: 0;
  display: flex;
  list-style-type: none;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const PageButton = styled(Link)<{ disabled: boolean; selected: boolean }>`
  padding: 0.75rem;
  color: var(--primary-color);

  &:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

  ${(properties) =>
    properties.selected &&
    css`
      pointer-events: none;
      font-weight: 700;
      color: var(--secondary-color);
    `}

  ${(properties) =>
    properties.disabled &&
    css`
      pointer-events: none;
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
    <Nav aria-label="Page navigation" role="navigation">
      <Wrapper>
        <ListItem key="previous">
          <PageButton
            aria-label="Previous page"
            disabled={!hasPreviousPage}
            rel="prev"
            selected={false}
            to={currentPage === 2 ? prefix : `${prefix}/${currentPage - 1}`}
          >
            <ArrowBack />
          </PageButton>
        </ListItem>
        {[...Array.from({ length: totalPages }).keys()].map((page) => {
          const pageNumber = page + 1;
          return pageNumber === currentPage ? (
            <ListItem key={`page-${pageNumber}`}>
              <PageButton
                aria-current="page"
                aria-label={`Current page, page ${currentPage}`}
                disabled={false}
                selected={true}
                to={pageNumber === 1 ? prefix : `${prefix}/${pageNumber}`}
              >
                {pageNumber}
              </PageButton>
            </ListItem>
          ) : (
            <ListItem key={`page-${pageNumber}`}>
              <PageButton
                aria-label={`Page ${pageNumber}`}
                disabled={false}
                selected={false}
                to={pageNumber === 1 ? prefix : `${prefix}/${pageNumber}`}
              >
                {pageNumber}
              </PageButton>
            </ListItem>
          );
        })}

        <ListItem key="next">
          <PageButton
            aria-label="Next page"
            disabled={!hasNextPage}
            rel="next"
            selected={false}
            to={`${prefix}/${currentPage + 1}`}
          >
            <ArrowForward />
          </PageButton>
        </ListItem>
      </Wrapper>
    </Nav>
  );
};

export default Pagination;
