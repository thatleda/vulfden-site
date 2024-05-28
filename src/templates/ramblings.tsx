import React from "react";

import { type HeadFC, type PageProps, graphql } from "gatsby";

import styled from "styled-components";

import Article from "components/Article";
import Layout from "components/Layout";
import SEO from "components/SEO";
import Pagination from "components/base/Pagination";
import Section from "components/base/Section";

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
            gatsbyImage(placeholder: BLURRED, width: 150, height: 150)
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
  const pagination = data.allSanityArticle.pageInfo;
  return (
    <Layout showFooter={false}>
      <Section heading="Unhinged ramblings">
        <Articles>
          {articles.map((article) => (
            <Article article={article} key={article.id} />
          ))}
        </Articles>
        <Pagination
          currentPage={pagination.currentPage}
          hasNextPage={pagination.hasNextPage}
          hasPreviousPage={pagination.hasPreviousPage}
          totalPages={pagination.pageCount}
        ></Pagination>
      </Section>
    </Layout>
  );
};

export default RamblingsPage;

export const Head: HeadFC = () => (
  <SEO
    description="You've reached the coveted index of Leda's finest wisdom. Good for you!"
    location="/ramblings"
    title="Ramblings"
  />
);
