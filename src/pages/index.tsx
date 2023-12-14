import React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import type { PortableTextBlock } from "@portabletext/types";
import Playlist from "../components/Playlist";
import PortableBlock from "../components/PortableBlock";
import Testimonial from "../components/Testimonial";
import SEO from "../components/SEO";
import HeroBanner from "../components/HeroBanner";
import Section from "../components/Section";
import About from "../components/About";
import Contact from "../components/Contact";
import Layout from "../components/Layout";

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
    <Layout>
      <HeroBanner />
      <Playlist />
      <About />
      {bioFromSanity && (
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
