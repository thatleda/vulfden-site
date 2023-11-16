import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Page,
  HeroSection,
  AboutSection,
  ContactSection,
  Seo,
  Section,
  Animation,
} from "gatsby-theme-portfolio-minimal";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Page useSplashScreenAnimation>
      <Seo title="Leda Wolf" />
      <HeroSection sectionId="hero" />
      <AboutSection sectionId="leda" heading="Who?" />
      <Animation>
        <Section sectionId="previously" heading="The road so far...">
          <div>
            <span>TBD</span>
          </div>
        </Section>
      </Animation>
      <Animation>
        <Section sectionId="testimonials" heading="Testimonials">
          <div>
            <span>TBD</span>
          </div>
        </Section>
      </Animation>
      <ContactSection sectionId="github" heading="What is she up to?" />
    </Page>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Vulfden</title>;
