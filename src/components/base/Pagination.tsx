import { Link } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";

import ArrowBack from "components/svg/ArrowBack";
import ArrowForward from "components/svg/ArrowForward";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`;

const PageButton = styled(Link)<{ $selected: boolean; $disabled: boolean }>`
  padding: 1rem;
  color: var(--primary-color);
  background-color: var(--tertiary-color);
  ${(props) =>
    props.$selected &&
    css`
      pointer-events: none;
      font-weight: 700;
      background-color: var(--background-color);
    `}

  ${(props) =>
    props.$disabled &&
    css`
      pointer-events: none;
      background-color: var(--background-color);
    `}
`;

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  hasPreviousPage,
  hasNextPage,
}) => {
  if (totalPages === 1) {
    return null;
  }
  return (
    <nav role="navigation" aria-label="Page navigation">
      <Wrapper>
        <li>
          <PageButton
            to={
              currentPage === 2 ? `/ramblings` : `/ramblings/${currentPage - 1}`
            }
            rel="prev"
            $selected={false}
            $disabled={!hasPreviousPage}
          >
            <ArrowBack />
          </PageButton>
        </li>
        <li>
          <PageButton
            to={`/ramblings/${currentPage}`}
            $selected={true}
            $disabled={false}
            aria-current={true}
            aria-label={`Current page, page ${currentPage}`}
          >
            {currentPage}
          </PageButton>
        </li>
        <li>
          <PageButton
            to={`/ramblings/${currentPage + 1}`}
            $selected={false}
            $disabled={!hasNextPage}
          >
            <ArrowForward />
          </PageButton>
        </li>
      </Wrapper>
    </nav>
  );
};

export default Pagination;
