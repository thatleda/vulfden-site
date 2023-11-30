import * as React from "react";
import { PageProps, graphql, useStaticQuery } from "gatsby";
import { Page, Animation, Section } from "gatsby-theme-portfolio-minimal";
import { PortableText } from "@portabletext/react";
import { GatsbyImage } from "gatsby-plugin-image";

export const query = graphql`
  query CMSPageQuery {
    sanityArticle(slug: { current: { eq: "adhd-makes-a-good-coworker" } }) {
      _id
      title
      _rawContent
      banner {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
  }
`;

const CMSPage: React.FC<PageProps> = ({ data }) => {
  // @ts-ignore
  const article = data.sanityArticle;

  return (
    <Page>
      <Animation>
        <Section anchor="previously" heading={article.title}>
          <GatsbyImage
            image={article.banner.asset.gatsbyImageData}
            alt={article.title}
          ></GatsbyImage>
          <PortableText value={article._rawContent}></PortableText>
        </Section>
      </Animation>
    </Page>
  );
};

export default CMSPage;
