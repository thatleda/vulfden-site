import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { Page, Section, Animation } from "gatsby-theme-portfolio-minimal";
import { GatsbyImage } from "gatsby-plugin-image";
import { formatRelative } from "date-fns";
import styled from "styled-components";

export const query = graphql`
  query RamblingsPage {
    allSanityArticle {
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

const ArticleCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 2rem;
  border: solid;
  border-radius: 2rem;
  border-width: 0.001rem;
`;

const ArticleTitle = styled.strong`
  font-style: italic;
  font-size: larger;
`;

const ArticleReleaseDate = styled.span`
  font-weight: 700;
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
            {articles.map((article) => {
              const articleHasBanner =
                article.banner && article.banner.asset && article._rawBanner;
              const articleReleaseDate = article._createdAt
                ? new Date(article._createdAt)
                : new Date();
              return (
                // TODO: extract to a component
                <Link to={article.slug?.current ?? "/"}>
                  <ArticleCard>
                    {articleHasBanner && (
                      <GatsbyImage
                        image={article.banner.asset.gatsbyImageData}
                        alt={article._rawBanner.alt as string}
                      ></GatsbyImage>
                    )}
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleReleaseDate>
                      {formatRelative(articleReleaseDate, new Date())}
                    </ArticleReleaseDate>
                  </ArticleCard>
                </Link>
              );
            })}
          </Articles>
        </Section>
      </Animation>
    </Page>
  );
};

export default RamblingsPage;
