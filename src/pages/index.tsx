import { graphql, type HeadFC, type PageProps } from "gatsby";
import React from "react";

import About from "components/About";
import Contact from "components/Contact";
import HeroBanner from "components/HeroBanner";
import Layout from "components/Layout";
import Playlist from "components/Playlist";
import PortableBlock from "components/PortableBlock";
import Section from "components/Section";
import SEO from "components/SEO";
import Testimonial from "components/Testimonial";

import type { PortableTextBlock } from "@portabletext/types";

export const query = graphql`
  query IndexPage {
    sanityPage(slug: { current: { eq: "previously" } }) {
      title
      _rawContent
    }
    allSanityReview {
      nodes {
        picture {
          asset {
            gatsbyImageData(
              width: 700
              height: 700
              fit: FILLMAX
              placeholder: BLURRED
            )
            altText
          }
        }
        comment
        reviewer
      }
    }
  }
`;

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const bioFromSanity = data.sanityPage;
  const testimonialsFromSanity = data.allSanityReview.nodes ?? [];

  return (
    <Layout>
      <HeroBanner />
      <Playlist />
      <About />
      {bioFromSanity !== null && (
        <Section anchor="previously" heading={bioFromSanity.title}>
          <PortableBlock
            value={bioFromSanity._rawContent as unknown as PortableTextBlock}
          ></PortableBlock>
        </Section>
      )}
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
      <Section anchor="contact" heading="What is she up to?">
        <Contact />
      </Section>
    </Layout>
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
