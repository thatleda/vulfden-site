import { Link } from "gatsby-link";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { formatDistance } from "date-fns";

type ArticleProps = {
  article: Queries.RamblingsPageQuery["allSanityArticle"]["nodes"][number];
};

const ArticleCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--background-color);
  transition: 0.5s ease-out;
  transition-property: background-color;

  &:hover {
    background-color: var(--primary-color);
    color: var(--background-color);
  }
`;

const ArticleTitle = styled.strong`
  font-style: italic;
  font-size: larger;
  line-break: loose;

  @media (max-width: 700px) {
    text-align: end;
  }
`;

const ArticleReleaseDate = styled.span`
  font-weight: 700;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Article: React.FC<ArticleProps> = ({ article }) => {
  const articleHasBanner =
    article.banner && article.banner.asset && article._rawBanner;
  const articleReleaseDate = article._createdAt
    ? new Date(article._createdAt)
    : new Date();

  return (
    <Link to={article.slug?.current ?? "/"}>
      <ArticleCard>
        {articleHasBanner && (
          <GatsbyImage
            image={article.banner.asset.gatsbyImageData}
            alt={article._rawBanner.alt as string}
            style={{
              minWidth: 100,
              opacity: 0.5,
            }}
          ></GatsbyImage>
        )}
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleReleaseDate>
          {formatDistance(articleReleaseDate, new Date(), { addSuffix: true })}
        </ArticleReleaseDate>
      </ArticleCard>
    </Link>
  );
};

export default Article;
