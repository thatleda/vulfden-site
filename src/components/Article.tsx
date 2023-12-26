import { formatDistance } from "date-fns";
import { Link } from "gatsby-link";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

interface ArticleProps {
  article: Queries.RamblingsPageQuery["allSanityArticle"]["nodes"][number];
}

const ArticleCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  border-radius: var(--border-radius);
  transition: 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition-property: background-color;

  &:hover {
    background-color: var(--secondary-color);
    opacity: 50%;
    color: var(--text-color);
  }
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: medium;
  justify-content: center;
`;

const ReadingTime = styled.div`
  font-style: italic;
  font-weight: 200;
  text-align: right;

  @media (max-width: 749px) {
    display: none;
  }
`;

const Released = styled.sub`
  font-weight: 200;
`;

const Article: React.FC<ArticleProps> = ({ article }) => {
  const articleHasBanner = article.banner?.asset != null;
  const articleReleaseDate =
    article._createdAt !== null ? new Date(article._createdAt) : new Date();

  return (
    <Link to={article.slug?.current ?? "/"}>
      <ArticleCard>
        {articleHasBanner && (
          <GatsbyImage
            image={article.banner.asset.gatsbyImageData}
            alt={article.banner.asset.altText ?? "Banner image"}
            style={{
              minWidth: 100,
              opacity: 0.5,
            }}
          ></GatsbyImage>
        )}
        <Description>
          <h3>{article.title}</h3>
          <ReadingTime>
            Reading time: {article.readingTimeInMinutes} minutes
          </ReadingTime>
          <Released>
            published {formatDistance(articleReleaseDate, new Date(), {
              addSuffix: true,
            })}
          </Released>
        </Description>
      </ArticleCard>
    </Link>
  );
};

export default Article;
