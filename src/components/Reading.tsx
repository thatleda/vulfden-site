import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import styled from "styled-components";

import { PortableTextBlock } from "@portabletext/react";

import PortableBlock from "./PortableBlock";
import Button from "./base/Button";
import Amazon from "./svg/Amazon";

interface ReadingProperties {
  book: Queries.IndexPageQuery["allSanityBook"]["nodes"][number];
}

const ReadingCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 379px) {
    flex-direction: column;
  }
`;

const Cover = styled(GatsbyImage)`
  @media (max-width: 379px) {
    min-height: 450px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: right;
  gap: 1rem;
`;

const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const ProgressBar = styled.progress`
  width: 80%;
  @media (max-width: 379px) {
    width: 100%;
  }
`;

const Title = styled.b`
  text-decoration: underline;
  font-size: 1.2rem;
`;

const Author = styled.sub`
  padding-top: 0.5rem;
`;

const Links = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
`;

const Reading: React.FC<ReadingProperties> = ({ book }) => {
  return (
    <>
      <ReadingCard>
        {book.cover != undefined && book.cover?.asset?.gatsbyImage && (
          <Cover
            alt={book.cover.asset?.altText ?? book.title ?? ""}
            image={book.cover.asset?.gatsbyImage}
          />
        )}
        <Description>
          Probably reading
          <Title>{book.title}</Title>
          <Author>
            by <em>{book.author}</em>
          </Author>
          {book.number && (
            <Progress>
              <p>
                Reading challenge progress: {book.number} of 100 books completed
              </p>
              <ProgressBar max={100} value={book.number} />
            </Progress>
          )}
          {book.url && (
            <Links>
              Find it on <Button href={book.url} icon={<Amazon />} />
            </Links>
          )}
        </Description>
      </ReadingCard>
      <PortableBlock value={book._rawNotes as unknown as PortableTextBlock} />
    </>
  );
};

export default Reading;
