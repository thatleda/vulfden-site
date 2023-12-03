import React from "react";
import { PageProps, graphql } from "gatsby";
import { Page, Section, Animation } from "gatsby-theme-portfolio-minimal";
import { GatsbyImage } from "gatsby-plugin-image";
import PortableBlock from "../components/PortableBlock";
import urlBuilder from "@sanity/image-url";

export const query = graphql`
  query GetMeThisArticleQuery($id: String!) {
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

const CMSPage: React.FC<PageProps> = ({ data }) => {
  // TODO: add typings
  // @ts-ignore
  const article = data.sanityArticle;

  return (
    <Page>
      <Animation>
        <Section heading={article.title}>
          <GatsbyImage
            image={article.banner.asset.gatsbyImageData}
            alt={article._rawBanner.alt}
          />
          {article.excerpt}
          <PortableBlock value={article._rawContent} />
        </Section>
      </Animation>
    </Page>
  );
};

export default CMSPage;
