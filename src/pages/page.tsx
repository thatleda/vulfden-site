import React from "react";
import { PageProps, graphql } from "gatsby";
import type { PortableTextBlock } from "@portabletext/types";
import { Page } from "gatsby-theme-portfolio-minimal";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import PortableBlock from "../components/PortableBlock";
import Section from "../components/Section";

export const query = graphql`
  query CMSPage($id: String) {
    sanityArticle(id: { eq: $id }) {
      title
      _rawBanner
      banner {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
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
      <Page>
        <Section heading={article.title}>
          {articleHasBannerImage && (
            <GatsbyImage
              image={article.banner?.asset?.gatsbyImageData as IGatsbyImageData}
              alt={bannerImageAlt}
            />
          )}
          <PortableBlock
            value={article._rawContent as unknown as PortableTextBlock}
          />
        </Section>
      </Page>
    );
  }
};

export default CMSPage;
