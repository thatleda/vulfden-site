import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import styled from "styled-components";

import Animation from "components/base/Animation";
import Button from "components/base/Button";
import Section from "components/base/Section";

const HeroCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  align-items: center;
  background-color: var(--card-background-color);
  border-radius: var(--border-radius);
  padding: 1rem;

  @media (max-width: 1015px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0;
  }
`;

const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 30vh;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 1000px) {
    gap: 1rem;
  }
`;

const Greeting = styled.h1`
  padding-bottom: 0;
  margin-bottom: 0;
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

  &:hover {
    color: var(--primary-color);
  }
`;

const ActionButtons = styled(Animation)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
`;

const HeroBanner: React.FC = () => {
  const introduction = `I'm a software engineer`;
  return (
    <Section animationProps={{ duration: 0 }}>
      <HeroCard>
        <StaticImage
          alt="Leda Wolf"
          height={200}
          src="../images/leda.jpeg"
          style={{
            borderRadius: "100%",
          }}
          width={200}
        />
        <CallToAction>
          <Greeting>Hello,</Greeting>
          <Introduction>{introduction}</Introduction>
          <Purpose>
            Let&apos;s see if I&apos;m a <u>good fit</u> for your company.
          </Purpose>
          <p>Look around and let me know what you think.</p>
          <ActionButtons duration={600} type="fadeLeft">
            <Button
              href="https://discord.com/users/732667625255075951"
              text="Discord"
            />
            <Button href="https://github.com/thatleda" text="GitHub" />
            <Button
              href="https://www.linkedin.com/in/thatleda/"
              text="LinkedIn"
            />
            <Button href="mailto:leda@hey.com" text="Mail" />
            <Button
              href="https://calendly.com/ledawolf/meeting"
              text="Calendly"
              variant="primary"
            />
          </ActionButtons>
        </CallToAction>
      </HeroCard>
    </Section>
  );
};

export default HeroBanner;
