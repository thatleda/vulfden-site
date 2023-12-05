import React from "react";
import { PageProps, graphql } from "gatsby";
import { Page, Section, Animation } from "gatsby-theme-portfolio-minimal";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import PortableBlock from "../components/PortableBlock";
import { PortableTextBlock } from "@portabletext/types";

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
        <Animation>
          <Section heading={article.title}>
            {articleHasBannerImage && (
              <GatsbyImage
                image={
                  article.banner?.asset?.gatsbyImageData as IGatsbyImageData
                }
                alt={bannerImageAlt}
              />
            )}
            <PortableBlock
              value={article._rawContent as unknown as PortableTextBlock}
            />
          </Section>
        </Animation>
      </Page>
    );
  }
};

export default CMSPage;
