import { graphql, type HeadFC, type PageProps } from "gatsby";
import React from "react";

import Layout from "components/Layout";
import PortableBlock from "components/PortableBlock";
import Section from "components/Section";
import SEO from "components/SEO";

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
      <Section anchor="privacy" heading={data.sanityPage?.title}>
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
    title="Privacy"
    description="This page is very important. It contains the idea that your privacy is important to me."
    location="/privacy"
  />
);
