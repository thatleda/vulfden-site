import React, { type PropsWithChildren } from "react";
import styled from "styled-components";

import Animation from "components/base/Animation";

interface SectionProps {
  anchor?: string;
  heading?: string | null;
}

const AnimatedSection = styled.section`
  height: auto;
  background: var(--background-color);
  scroll-margin-top: 60px;
  padding: var(--page-padding);
  margin: 0 auto 8rem auto;

  @media (max-width: 749px) {
    margin: 0 auto 2rem auto;
    padding-bottom: 2rem;
  }
`;

const ContentWrapper = styled.div`
  height: 100%;
  max-width: var(--page-width);
  margin: 0 auto 2rem auto;
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

const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  anchor,
  heading,
  children,
}) => {
  const hasHeading = heading !== undefined && heading !== null;
  return (
    <Animation type="fadeUp" duration={600}>
      <AnimatedSection id={anchor}>
        <ContentWrapper>
          {hasHeading && <Heading>{heading}</Heading>}
          <div>{children}</div>
        </ContentWrapper>
      </AnimatedSection>
    </Animation>
  );
};

export default Section;
