import React from "react";

import { type HeadFC, type PageProps, graphql } from "gatsby";

import Layout from "components/Layout";
import PortableBlock from "components/PortableBlock";
import SEO from "components/SEO";
import Section from "components/base/Section";

import type { PortableTextBlock } from "@portabletext/types";

export const query = graphql`
  query ImprintPage {
    sanityPage(slug: { current: { eq: "imprint" } }) {
      title
      _rawContent
    }
  }
`;

const ImprintPage: React.FC<PageProps<Queries.ImprintPageQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <Section anchor="imprint">
        <h1>{data.sanityPage?.title}</h1>
        <PortableBlock
          value={data.sanityPage?._rawContent as unknown as PortableTextBlock}
        />
      </Section>
    </Layout>
  );
};

export default ImprintPage;

export const Head: HeadFC = () => (
  <SEO
    description="That I'm legally obligated to put my address here is ridiculous."
    location="/imprint"
    title="STALKER!"
  />
);
