import { graphql, type HeadFC, type PageProps } from "gatsby";
import React from "react";
import styled from "styled-components";

import Article from "components/Article";
import Layout from "components/Layout";
import Section from "components/Section";
import SEO from "components/SEO";
import Pagination from "components/base/Pagination";

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
        excerpt
        readingTimeInMinutes
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
            <Article key={article.id} article={article} />
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
    title="Ramblings"
    description="You've reached the coveted index of Leda's finest wisdom. Good for you!"
    location="/ramblings"
  />
);
