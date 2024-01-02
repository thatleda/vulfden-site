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
  transition: 0.5s ease-in-out;
  transition-property: background-color;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: medium;
  justify-content: center;
`;

const Released = styled.sub`
  font-weight: 200;
`;

const Article: React.FC<ArticleProps> = ({ article }) => {
  const articleReleaseDate =
    article._createdAt !== null ? new Date(article._createdAt) : new Date();

  return (
    <Link to={article.slug?.current ?? "/"}>
      <ArticleCard>
        {article.banner?.asset?.gatsbyImage != null && (
          <GatsbyImage
            image={article.banner.asset.gatsbyImage}
            alt={article.banner.asset.altText ?? "Banner image"}
          ></GatsbyImage>
        )}
        <Description>
          <h3>{article.title}</h3>
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
