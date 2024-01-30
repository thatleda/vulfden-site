import React, { type PropsWithChildren } from "react";
import styled from "styled-components";

import Animation from "./Animation";

interface CardProps {
  actionButtons?: React.ReactNode;
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card-background-color);
  border-radius: var(--border-radius);
  padding: 1rem;
`;

const ActionButtons = styled(Animation)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  children,
  actionButtons,
}) => {
  return (
    <CardWrapper>
      {children}
      <ActionButtons duration={600} type="fadeLeft">{actionButtons}</ActionButtons>
    </CardWrapper>
  );
};

export default Card;
