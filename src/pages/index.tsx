import * as React from "react";
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby";
import {
  AboutSection,
  Animation,
  ContactSection,
  HeroSection,
  Page,
  Section,
} from "gatsby-theme-portfolio-minimal";
import PlaylistSection from "../components/PlaylistSection";
import PortableBlock from "../components/PortableBlock";
import Testimonial, { type TestimonialProps } from "../components/Testimonial";
import SEO from "../components/SEO";

const IndexPage: React.FC<PageProps> = () => {
  const sanityData = useStaticQuery(graphql`
    query {
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
  `);

  const bioFromSanity = sanityData.sanityArticle;
  const testimonialsFromSanity: TestimonialProps[] =
    sanityData.allSanityReview.nodes;

  return (
    <Page useSplashScreenAnimation>
      <HeroSection sectionId="hero" />
      <PlaylistSection />
      <AboutSection sectionId="who" heading="Who?" />
      <Animation>
        <Section anchor="previously" heading={bioFromSanity.title}>
          <PortableBlock value={bioFromSanity._rawContent}></PortableBlock>
        </Section>
      </Animation>
      <Animation>
        <Section anchor="testimonials" heading="Testimonials">
          {testimonialsFromSanity.map((data) => (
            <Testimonial key={data.reviewer} {...data} />
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
  />
);
