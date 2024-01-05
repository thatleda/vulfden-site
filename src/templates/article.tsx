import { graphql, type HeadFC, type HeadProps, type PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

import Layout from "components/Layout";
import PortableBlock from "components/PortableBlock";
import Section from "components/Section";
import SEO from "components/SEO";

import type { PortableTextBlock } from "@portabletext/types";

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
              image={bannerImage}
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

interface ArticlePageContext {
  id: string;
  articlePath: string;
}

export const Head: HeadFC<Queries.ArticleQuery, ArticlePageContext> = (
  props: HeadProps<Queries.ArticleQuery, ArticlePageContext>
) => (
  <SEO
    title={props.data.sanityArticle?.title ?? "Article"}
    description={props.data.sanityArticle?.excerpt ?? ""}
    location={props.pageContext.articlePath}
  />
);
