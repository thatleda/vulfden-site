import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import styled from "styled-components";

import PortableBlock from "components/PortableBlock";
import Section from "components/base/Section";

import type { PortableTextBlock } from "@portabletext/types";

const AboutCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 749px) {
    flex-direction: column;
  }
`;

const Photo = styled(GatsbyImage)`
  margin: 0 auto;
  border-radius: var(--border-radius);
`;

const Text = styled.div`
  @media (max-width: 749px) {
    padding: 0;
  }
`;

const About: React.FC = () => {
  const data: Queries.AboutQuery = useStaticQuery(graphql`
    query About {
      sanityPage(slug: { current: { eq: "who" } }) {
        banner {
          asset {
            gatsbyImage(width: 300, fit: FILL, placeholder: BLURRED)
            altText
          }
        }
        title
        _rawContent
      }
    }
  `);
  const photo = data.sanityPage?.banner?.asset?.gatsbyImage;
  const alt = data.sanityPage?.banner?.asset?.altText ?? "Leda's science face";

  return (
    <Section anchor="who" heading="Who?">
      <AboutCard>
        {photo != undefined && (
          <Photo alt={alt} image={photo} style={{ minWidth: 200 }} />
        )}
        <Text>
          <PortableBlock
            value={data.sanityPage?._rawContent as unknown as PortableTextBlock}
          />
        </Text>
      </AboutCard>
    </Section>
  );
};

export default About;
