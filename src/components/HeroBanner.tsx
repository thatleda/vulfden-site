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

  @media (max-width: 1015px) {
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

const Greeting = styled.h1`
  padding-bottom: 0;
  margin-bottom: 0;
  font-size: 2.5rem;
  line-height: 0;
  text-align: start;
  color: var(--subtext-color);
`;

const Introduction = styled.h1`
  font-size: 2.625rem;
  line-height: 3rem;
  margin-bottom: 0;
  line-break: unset;
  text-shadow: var(--secondary-color) 1px 0 10px;
`;

const Purpose = styled.h2`
  font-size: 1.5rem;
  line-height: 1rem;
  margin: 0;
  text-align: end;
  text-shadow: var(--background-color) 0 0 20px;

  @media (max-width: 749px) {
    display: none;
  }
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
          src="../images/leda.jpeg"
          alt="Leda Wolf"
          style={{
            width: 200,
            height: 200,
            borderRadius: "100%",
          }}
        />
        <CallToAction>
          <Greeting>Hello,</Greeting>
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
