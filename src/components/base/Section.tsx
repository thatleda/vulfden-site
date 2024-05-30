import React, { type PropsWithChildren } from "react";

import styled from "styled-components";

import Animation, { type AnimationProperties } from "components/base/Animation";

interface SectionProperties {
  anchor?: string;
  animationProps?: AnimationProperties;
  heading?: null | string;
}

const AnimatedSection = styled.section`
  height: auto;
  background: var(--background-color);
  scroll-margin-top: 60px;
  padding: var(--page-padding);
  margin: 0 auto 4rem auto;

  @media (max-width: 749px) {
    margin: 0 auto 2rem auto;
    padding-bottom: 2rem;
  }
`;

const ContentWrapper = styled.div`
  height: 100%;
  max-width: var(--page-width);
  margin: 0 auto 0 auto;
  padding: var(--page-padding);

  @media (max-width: 749px) {
    padding: 0;
  }
`;

const Heading = styled.h2`
  margin: 0 0 2rem 0;
  font-size: 1.75rem;
  line-height: 2.25rem;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Section: React.FC<PropsWithChildren<SectionProperties>> = ({
  anchor,
  animationProps,
  children,
  heading,
}) => {
  const hasHeading = heading !== undefined && heading !== null;
  const animation: AnimationProperties = {
    duration: 600,
    type: "fadeUp",
    ...animationProps,
  };
  return (
    <Animation {...animation}>
      <AnimatedSection id={anchor}>
        <ContentWrapper>
          {hasHeading && <Heading>{heading}</Heading>}
          <Cards>{children}</Cards>
        </ContentWrapper>
      </AnimatedSection>
    </Animation>
  );
};

export default Section;
