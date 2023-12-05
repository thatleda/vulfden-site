import React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Page, LegalSection } from "gatsby-theme-portfolio-minimal";
import SEO from "../components/SEO";

const ImprintPage: React.FC<PageProps> = () => {
  return (
    <Page>
      <LegalSection sectionId="imprint" heading="Imprint" />
    </Page>
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
