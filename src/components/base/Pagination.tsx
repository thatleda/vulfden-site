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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const PageButton = styled(Link)<{ $selected: boolean; $disabled: boolean }>`
  padding: 1rem;
  color: var(--primary-color);
  ${(props) =>
    props.$selected &&
    css`
      pointer-events: none;
      font-weight: 700;
    `}

  ${(props) =>
    props.$disabled &&
    css`
      pointer-events: none;
      color: var(--tertiary-color);
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
    <Wrapper>
      <PageButton
        to={currentPage === 2 ? `/ramblings` : `/ramblings/${currentPage - 1}`}
        $selected={false}
        $disabled={!hasPreviousPage}
      >
        <ArrowBack></ArrowBack>
      </PageButton>

      <PageButton
        to={`/ramblings/${currentPage}`}
        $selected={true}
        $disabled={false}
      >
        {currentPage}
      </PageButton>

      <PageButton
        to={`/ramblings/${currentPage + 1}`}
        $selected={false}
        $disabled={!hasNextPage}
      >
        <ArrowForward></ArrowForward>
      </PageButton>
    </Wrapper>
  );
};

export default Pagination;
