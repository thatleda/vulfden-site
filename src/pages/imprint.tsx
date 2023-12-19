import { type HeadFC, type PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Section from "../components/Section";

const ImprintPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Section anchor="imprint" heading="Imprint">
        I have the legal imprint.
      </Section>
    </Layout>
  );
};

export default ImprintPage;

export const Head: HeadFC = () => (
  <SEO
    title="STALKER!"
    description="That I'm legally obligated to put my address here is ridiculous."
    location="/imprint"
  />
);
