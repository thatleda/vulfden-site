import React from "react";

import { type HeadFC, type PageProps, graphql } from "gatsby";

import About from "components/About";
import Contact from "components/Contact";
import HeroBanner from "components/HeroBanner";
import Layout from "components/Layout";
import Playlist from "components/Playlist";
import PortableBlock from "components/PortableBlock";
import Reading from "components/Reading";
import SEO from "components/SEO";
import Testimonial from "components/Testimonial";
import Section from "components/base/Section";

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
            gatsbyImage(
              width: 200
              height: 200
              fit: FILL
              placeholder: BLURRED
            )
            altText
          }
        }
        comment
        reviewer
      }
    }
    allSanityBook(limit: 1, sort: { _createdAt: DESC }) {
      nodes {
        cover {
          asset {
            gatsbyImage(
              width: 200
              fit: COVER
              placeholder: BLURRED
              quality: 100
            )
            altText
          }
        }
        title
        author
        url
        number
        _rawNotes
      }
    }
  }
`;

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const bioFromSanity = data.sanityPage;
  const testimonialsFromSanity = data.allSanityReview.nodes ?? [];
  const book = data.allSanityBook.nodes[0];

  return (
    <Layout>
      <HeroBanner />
      <About />
      <Playlist />
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
            comment={testimonial.comment ?? ""}
            key={testimonial.reviewer}
            picture={testimonial.picture}
            reviewer={testimonial.reviewer ?? ""}
          />
        ))}
      </Section>
      <Section anchor="contact" heading="What is she up to?">
        <Reading book={book} />
        <Contact />
      </Section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO
    description="Leda is a passionate software engineer, whose empathetic and playful approach to problems is sure to find a solution for you."
    location="/"
    title="Leda Wolf"
  />
);
