import React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../components/SEO";
import Section from "../components/Section";
import Layout from "../components/Layout";

const PrivacyPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Section anchor="privacy" heading="Privacy">
        I'm a very private person
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
