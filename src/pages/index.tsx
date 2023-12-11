import React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import type { PortableTextBlock } from "@portabletext/types";
import {
  AboutSection,
  ContactSection,
  Page,
} from "gatsby-theme-portfolio-minimal";
import Animation from "../components/Animation";
import PlaylistSection from "../components/PlaylistSection";
import PortableBlock from "../components/PortableBlock";
import Testimonial from "../components/Testimonial";
import SEO from "../components/SEO";
import HeroBanner from "../components/HeroBanner";
import Section from "../components/Section";

export const query = graphql`
  query IndexPage {
    sanityArticle(slug: { current: { eq: "the-road-so-far" } }) {
      _id
      title
      _rawContent
    }
    allSanityReview {
      nodes {
        picture {
          asset {
            gatsbyImageData(
              width: 500
              height: 500
              fit: FILLMAX
              placeholder: BLURRED
            )
          }
        }
        comment
        reviewer
      }
    }
  }
`;

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const bioFromSanity = data.sanityArticle;
  const testimonialsFromSanity = data.allSanityReview.nodes ?? [];

  return (
    <Page useSplashScreenAnimation>
      <HeroBanner />
      <PlaylistSection />
      <AboutSection sectionId="who" heading="Who?" />
      {bioFromSanity && (
        <Animation>
          <Section anchor="previously" heading={bioFromSanity.title}>
            <PortableBlock
              value={bioFromSanity._rawContent as unknown as PortableTextBlock}
            ></PortableBlock>
          </Section>
        </Animation>
      )}
      <Animation>
        <Section anchor="testimonials" heading="Testimonials">
          {testimonialsFromSanity.map((testimonial) => (
            <Testimonial
              key={testimonial.reviewer}
              comment={testimonial.comment ?? ""}
              reviewer={testimonial.reviewer ?? ""}
              picture={testimonial.picture}
            />
          ))}
        </Section>
      </Animation>
      <ContactSection sectionId="contact" heading="What is she up to?" />
    </Page>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO
    title="Leda Wolf"
    description="Leda is a passionate software engineer, whose empathetic and playful approach to problems is sure to find a solution for you."
    location="/"
  />
);
