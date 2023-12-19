import { graphql, type PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

import Layout from "components/Layout";
import PortableBlock from "components/PortableBlock";
import Section from "components/Section";

import type { PortableTextBlock } from "@portabletext/types";

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
  const bannerImageAlt = article?._rawBanner?.alt as string;
  if (article !== null) {
    return (
      <Layout>
        <Section heading={article.title}>
          {article?.banner?.asset?.gatsbyImageData !== undefined && (
            <Banner
              image={article.banner?.asset?.gatsbyImageData}
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
