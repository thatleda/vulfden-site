import React from "react";

import { type HeadFC, Link, type PageProps } from "gatsby";

import styled from "styled-components";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Section from "components/base/Section";

const Warning = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Greeting = styled.h1`
  font-size: xx-large;
`;

const GoBack = styled(Link)`
  font-size: xx-large;
  color: var(--text-color);
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout showFooter={false}>
      <Section heading="Page not found">
        <Warning>
          <Greeting>Helloooo, sailor!</Greeting>
          <p>It&apos;s funny, where life brings us.</p>
          <p>Maybe, there is opportunity in our mistakes.</p>
          <GoBack to="/">
            <h1>
              <u>Nevermind.</u>
            </h1>
          </GoBack>
        </Warning>
      </Section>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <SEO
    description="Tried to append something dumb to the URL? Funny. Keep looking, gender-non-specific friend."
    location="/404"
    title="Shit outta luck"
  />
);
