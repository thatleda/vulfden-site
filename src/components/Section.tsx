import React from "react";
import Animation from "./base/Animation";
import styled from "styled-components";

type SectionProps = {
  anchor?: string;
  heading?: string | null;
  children: React.ReactNode;
};

const AnimatedSection = styled.section`
  width: 100%;
  height: auto;
  background: var(--background-color);
  scroll-margin-top: 60px;
  padding: var(--page-padding);
  margin: 0 auto 8rem auto;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--page-width);
  margin: 0 auto 8rem auto;
  padding: var(--page-padding);
`;

const Heading = styled.h3`
  margin: 0 0 2rem 0;
  font-size: 1.75rem;
  line-height: 2.25rem;
`;

const Section: React.FC<SectionProps> = ({ anchor, heading, children }) => {
  return (
    <Animation type="fadeUp" duration={600}>
      <AnimatedSection id={anchor}>
        <ContentWrapper>
          {heading && <Heading>{heading}</Heading>}
          {children}
        </ContentWrapper>
      </AnimatedSection>
    </Animation>
  );
};

export default Section;
