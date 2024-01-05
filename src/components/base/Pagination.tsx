import { Link } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "usehooks-ts";

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
  const smallScreen = useMediaQuery("(max-width: 749px)");

  if (totalPages === 1) {
    return null;
  }

  if (smallScreen) {
    return (
      <Wrapper>
        <PageButton
          to={`/ramblings/${currentPage - 1}`}
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
  } else {
    return (
      <Wrapper>
        {Array.from({ length: totalPages }).map((_, pageNumber) => {
          const isPreviousPage = (page: number): boolean =>
            currentPage === page + 1;
          const isNextPage = (page: number): boolean =>
            currentPage + 1 === page;
          const isCurrentPage = (page: number): boolean => currentPage === page;
          return (
            <PageButton
              key={pageNumber}
              to={`/ramblings/${pageNumber}`}
              $selected={isCurrentPage(pageNumber)}
              $disabled={
                isCurrentPage(pageNumber) ||
                (isPreviousPage(pageNumber) && !hasPreviousPage) ||
                (isNextPage(pageNumber) && !hasNextPage)
              }
            >
              {pageNumber}
            </PageButton>
          );
        })}
      </Wrapper>
    );
  }
};

export default Pagination;
