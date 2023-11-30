import * as React from "react";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import {
  Page,
  HeroSection,
  ProjectsSection,
  AboutSection,
  ContactSection,
  Seo,
  Section,
  Animation,
} from "gatsby-theme-portfolio-minimal";
import { PortableText } from "@portabletext/react";

const IndexPage: React.FC<PageProps> = () => {
  const bioFromSanity = useStaticQuery(graphql`
    query {
      sanityArticle(slug: { current: { eq: "the-road-so-far" } }) {
        _id
        title
        _rawContent
      }
    }
  `).sanityArticle;

  return (
    <Page useSplashScreenAnimation>
      <Seo title="Leda Wolf" />
      <HeroSection sectionId="hero" />
      <Animation>
        <Section>
          <iframe
            src="https://open.spotify.com/embed/playlist/1JNp21xKrHEI7Kt5sWZye7?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Section>
      </Animation>
      <AboutSection sectionId="who" heading="Who?" />
      <Animation>
        <Section anchor="previously" heading={bioFromSanity.title}>
          <PortableText value={bioFromSanity._rawContent}></PortableText>
        </Section>
      </Animation>
      <ProjectsSection
        sectionId="testimonials"
        heading="Testimonials"
      ></ProjectsSection>
      <ContactSection sectionId="github" heading="What is she up to?" />
    </Page>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Vulfden</title>;
