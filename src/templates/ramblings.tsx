import { graphql, type HeadFC, type PageProps } from "gatsby";
import React from "react";
import styled from "styled-components";

import Article from "components/Article";
import Layout from "components/Layout";
import Section from "components/Section";
import SEO from "components/SEO";

export const query = graphql`
  query RamblingsPage($limit: Int, $skip: Int) {
    allSanityArticle(sort: { _createdAt: DESC }, limit: $limit, skip: $skip) {
      pageInfo {
        currentPage
        pageCount
        hasNextPage
        hasPreviousPage
        totalCount
      }
      nodes {
        id
        slug {
          current
        }
        title
        banner {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 100, height: 100)
            altText
          }
        }
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
    <Layout showFooter={false}>
      <Section heading="Unhinged ramblings">
        <Articles>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </Articles>
      </Section>
    </Layout>
  );
};

export default RamblingsPage;

export const Head: HeadFC = () => (
  <SEO
    title="Ramblings"
    description="You've reached the coveted index of Leda's finest wisdom. Good for you!"
    location="/ramblings"
  />
);
