import React from "react";

import { type HeadFC, type HeadProps, type PageProps, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import styled from "styled-components";

import Layout from "components/Layout";
import PortableBlock from "components/PortableBlock";
import SEO from "components/SEO";
import Section from "components/base/Section";

import type { PortableTextBlock } from "@portabletext/types";

const Banner = styled(GatsbyImage)`
  margin: 0 auto;
  display: flex;
  max-height: 50vh;
`;

export const query = graphql`
  query Article($id: String) {
    sanityArticle(id: { eq: $id }) {
      title
      banner {
        asset {
          gatsbyImage(fit: CONTAIN, placeholder: BLURRED, width: 750)
          altText
        }
      }
      _rawContent
      excerpt
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
          {bannerImage !== null && bannerImage !== undefined && (
            <Banner
              alt={article.banner?.asset?.altText ?? "Banner image"}
              image={bannerImage}
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

interface ArticlePageContext {
  articlePath: string;
  id: string;
}

export const Head: HeadFC<Queries.ArticleQuery, ArticlePageContext> = (
  properties: HeadProps<Queries.ArticleQuery, ArticlePageContext>,
) => (
  <SEO
    description={properties.data.sanityArticle?.excerpt ?? ""}
    location={properties.pageContext.articlePath}
    title={properties.data.sanityArticle?.title ?? "Article"}
  />
);
