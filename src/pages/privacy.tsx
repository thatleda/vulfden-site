import React from "react";

import { type HeadFC, type PageProps, graphql } from "gatsby";

import Layout from "components/Layout";
import PortableBlock from "components/PortableBlock";
import SEO from "components/SEO";
import Section from "components/base/Section";

import type { PortableTextBlock } from "@portabletext/types";

export const query = graphql`
  query PrivacyPage {
    sanityPage(slug: { current: { eq: "privacy" } }) {
      title
      _rawContent
    }
  }
`;

const PrivacyPage: React.FC<PageProps<Queries.PrivacyPageQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <Section anchor="privacy">
        <h1>{data.sanityPage?.title}</h1>
        <PortableBlock
          value={data.sanityPage?._rawContent as unknown as PortableTextBlock}
        />
      </Section>
    </Layout>
  );
};

export default PrivacyPage;

export const Head: HeadFC = () => (
  <SEO
    description="This page is very important. It contains the idea that your privacy is important to me."
    location="/privacy"
    title="Privacy"
  />
);
