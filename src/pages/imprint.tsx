import React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../components/SEO";
import Section from "../components/Section";
import Layout from "../components/Layout";

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
