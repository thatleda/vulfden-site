import { graphql, HeadFC, type PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

import Layout from "components/Layout";
import PortableBlock from "components/PortableBlock";
import Section from "components/Section";

import type { PortableTextBlock } from "@portabletext/types";
import SEO from "components/SEO";

const Banner = styled(GatsbyImage)`
  float: right;
  margin-left: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 800px) {
    margin: 0 auto;
    float: unset;
    display: flex;
  }
`;

export const query = graphql`
  query Article($id: String) {
    sanityArticle(id: { eq: $id }) {
      title
      banner {
        asset {
          gatsbyImage(fit: FILL, placeholder: BLURRED, width: 500, height: 500)
          altText
        }
      }
      _rawContent
    }
  }
`;

const ArticlePage: React.FC<PageProps<Queries.ArticleQuery>> = ({ data }) => {
  const article = data.sanityArticle;
  const bannerImage = article?.banner?.asset?.gatsbyImage;

  if (article !== null) {
    return (
      <Layout>
        <Section>
          <h1>{article.title}</h1>
          {bannerImage && (
            <Banner
              image={article.banner?.asset?.gatsbyImage}
              alt={article.banner?.asset?.altText ?? "Banner image"}
            />
          )}
          <PortableBlock
            value={article._rawContent as unknown as PortableTextBlock}
          />
        </Section>
      </Layout>
    );
  }
};

export default ArticlePage;

export const Head: HeadFC<
  Queries.ArticleQuery,
  { id: string; path: string }
> = ({ data, pageContext }) => (
  <SEO
    title={data.sanityArticle?.title ?? "Article"}
    description=""
    location={pageContext.path}
  />
);
