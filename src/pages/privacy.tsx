import { type HeadFC, type PageProps } from "gatsby";
import React from "react";

import Layout from "components/Layout";
import Section from "components/Section";
import SEO from "components/SEO";

const PrivacyPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Section anchor="privacy" heading="Privacy">
        I am a very private person
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
