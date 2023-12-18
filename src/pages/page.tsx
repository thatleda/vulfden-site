import React from "react";
import { PageProps, graphql } from "gatsby";
import type { PortableTextBlock } from "@portabletext/types";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import PortableBlock from "../components/PortableBlock";
import Section from "../components/Section";
import Layout from "../components/Layout";
import styled from "styled-components";

const Banner = styled(GatsbyImage)`
  display: flex;
  max-height: 40vh;
`;

export const query = graphql`
  query CMSPage($id: String) {
    sanityArticle(id: { eq: $id }) {
      title
      _rawBanner
      banner {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, width: 1000)
        }
      }
      _rawContent
    }
  }
`;

const CMSPage: React.FC<PageProps<Queries.CMSPageQuery>> = ({ data }) => {
  const article = data.sanityArticle;
  const articleHasBannerImage =
    article?.banner?.asset?.gatsbyImageData || false;
  const bannerImageAlt = article?._rawBanner?.alt as string;
  if (article) {
    return (
      <Layout>
        <Section heading={article.title}>
          {articleHasBannerImage && (
            <Banner
              image={article.banner?.asset?.gatsbyImageData as IGatsbyImageData}
              alt={bannerImageAlt}
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

export default CMSPage;
