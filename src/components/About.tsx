import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

import PortableBlock from "components/PortableBlock";
import Section from "components/Section";

import type { PortableTextBlock } from "@portabletext/types";

const AboutCard = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 749px) {
    flex-direction: column;
  }
`;

const Photo = styled(GatsbyImage)`
  max-width: 300px;
  margin: 0 auto;
  border-radius: var(--border-radius);
`;

const Text = styled.div`
  padding: 2rem;

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
            gatsbyImageData(width: 750, placeholder: BLURRED)
            altText
          }
        }
        title
        _rawContent
      }
    }
  `);
  const photo = data.sanityPage?.banner?.asset?.gatsbyImageData;
  const alt = data.sanityPage?.banner?.asset?.altText ?? "Leda's science face";

  return (
    <Section anchor="who" heading="Who?">
      <AboutCard>
        {photo != null && <Photo image={photo} alt={alt} />}
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
