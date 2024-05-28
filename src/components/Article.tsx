import React from "react";

import { Link } from "gatsby-link";
import { GatsbyImage } from "gatsby-plugin-image";

import styled from "styled-components";

import { formatDistance } from "date-fns";

interface ArticleProperties {
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

const Article: React.FC<ArticleProperties> = ({ article }) => {
  const articleReleaseDate =
    article._createdAt === null ? new Date() : new Date(article._createdAt);

  return (
    <Link to={"/ramblings/" + article.slug?.current || "/"}>
      <ArticleCard>
        {article.banner?.asset?.gatsbyImage != undefined && (
          <GatsbyImage
            alt={article.banner.asset.altText ?? "Banner image"}
            image={article.banner.asset.gatsbyImage}
          ></GatsbyImage>
        )}
        <Description>
          <h3>{article.title}</h3>
          <sub>
            published{" "}
            {formatDistance(articleReleaseDate, new Date(), {
              addSuffix: true,
            })}
          </sub>
        </Description>
      </ArticleCard>
    </Link>
  );
};

export default Article;
