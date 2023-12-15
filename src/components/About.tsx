import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { graphql, useStaticQuery } from "gatsby";

const AboutCard = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Photo = styled(GatsbyImage)`
  max-width: 300px;
  margin: 0 auto;
`;

const Text = styled.div`
  padding: 2rem;

  @media (max-width: 1000px) {
    padding: 2rem 0;
  }
`;

const About: React.FC = () => {
  const data: Queries.AboutQuery = useStaticQuery(graphql`
    query About {
      allFile(filter: { name: { eq: "leda-vertical" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 750, placeholder: BLURRED)
          }
        }
      }
    }
  `);
  const photo = data.allFile.nodes[0].childImageSharp?.gatsbyImageData;

  return (
    <Section anchor="who" heading="Who?">
      <AboutCard>
        {photo && <Photo image={photo} alt="Leda ranting" />}
        <Text>
          <p>
            <i>Canis Ledus</i> is indigeous to Northern Germany, where the
            member of the species delights in the flatness of the land. The
            humidity as well as the sea breeze are essential to this wild
            animal's survival and thrival.
          </p>
          <p>
            While many have attempted to domesticate this noble creature, its
            unusual hostility to children based on primitive and visceral fear
            of small human beings makes it unfit as a family pet. This
            unfortunate condition is being currently remedied with decent
            exposure under the observation of capable veterinarians.
          </p>
          <p>
            To help people is this incredible specimen's foremost desire and
            greatest joy in life and through stubborn determination, quick wit,
            and sheer audacity, she claims all things are possible. Her
            territorial cry generally sounds like a pleasant, "How may I help?"
          </p>
        </Text>
      </AboutCard>
    </Section>
  );
};

export default About;
