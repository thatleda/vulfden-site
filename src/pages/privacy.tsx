import React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Page, LegalSection } from "gatsby-theme-portfolio-minimal";
import SEO from "../components/SEO";

const PrivacyPage: React.FC<PageProps> = () => {
  return (
    <Page>
      <LegalSection sectionId="privacy" heading="Privacy" />
    </Page>
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
