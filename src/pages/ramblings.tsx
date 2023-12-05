import React from "react";
import { PageProps, graphql } from "gatsby";
import { Page, Section, Animation } from "gatsby-theme-portfolio-minimal";
import styled from "styled-components";
import Article from "../components/Article";

export const query = graphql`
  query RamblingsPage {
    allSanityArticle(sort: { _createdAt: DESC }) {
      nodes {
        id
        slug {
          current
        }
        title
        banner {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 100, height: 100)
          }
        }
        _rawBanner
        _createdAt
      }
    }
  }
`;

const Articles = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;

const RamblingsPage: React.FC<PageProps<Queries.RamblingsPageQuery>> = ({
  data,
}) => {
  const articles = data.allSanityArticle.nodes;

  return (
    <Page>
      <Animation>
        <Section heading="Unhinged ramblings">
          <Articles>
            {articles.map((article) => (
              <Article article={article} />
            ))}
          </Articles>
        </Section>
      </Animation>
    </Page>
  );
};

export default RamblingsPage;
