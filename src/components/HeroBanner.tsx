import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Section from "./Section";
import Animation from "./base/Animation";
import Button from "./base/Button";

const HeroCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  align-items: center;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 30vh;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    gap: 1rem;
  }
`;

const HowlingWolf = styled(Animation)`
  max-width: 2.25rem;
  max-height: 2.25rem;
`;

const Greeting = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  font-weight: 800;
  font-size: 3rem;
`;

const Introduction = styled.h1`
  font-size: 2.625rem;
  line-height: 4rem;
  margin-bottom: 0;
`;

const Purpose = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const ActionButtons = styled(Animation)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  max-height: 2.5rem;
`;

const HeroBanner: React.FC = () => {
  return (
    <Section>
      <HeroCard>
        <StaticImage
          src="../content/images/leda.jpeg"
          alt="Leda Wolf"
          style={{
            width: 200,
            height: 200,
            borderRadius: "100%",
          }}
        />
        <CallToAction>
          <Greeting>
            <HowlingWolf type="wiggle" duration={1000}>
              <StaticImage src="../content/images/wolf.png" alt="Wolf icon" />
            </HowlingWolf>
            Awoo!
          </Greeting>
          <Introduction>I'm a software engineer.</Introduction>
          <Purpose>
            Let's see if I'm a <u>good fit</u> for your company.
          </Purpose>
          <p>Look around and let me know what you think.</p>
          <ActionButtons duration={600} type="fadeLeft">
            <Button
              text="Discord"
              href="https://discord.com/users/732667625255075951"
            />
            <Button text="GitHub" href="https://github.com/thatleda" />
            <Button
              text="LinkedIn"
              href="https://www.linkedin.com/in/thatleda/"
            />
            <Button text="Mail" href="mailto:hello@leda.fyi" />
            <Button
              href="https://calendly.com/ledawolf/meeting"
              variant="primary"
              text="Calendly"
            />
          </ActionButtons>
        </CallToAction>
      </HeroCard>
    </Section>
  );
};

export default HeroBanner;
