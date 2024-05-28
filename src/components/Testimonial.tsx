import React from "react";

import { GatsbyImage, type IGatsbyImageData } from "gatsby-plugin-image";

import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: normal;
  padding: 2rem 0;

  @media (max-width: 700px) {
    display: grid;
  }
`;

const Text = styled.div`
  display: grid;
  width: 100%;
  padding-left: 2rem;

  @media (max-width: 700px) {
    display: grid;
    padding: 2rem 0;
  }
`;

const Comment = styled.q`
  quotes: auto;
  font-style: italic;
  color: var(--text-color);
`;

const Reviewer = styled.b`
  padding-top: 1rem;
  text-align: right;
`;

export interface TestimonialProperties {
  comment: string;
  picture: {
    asset: {
      altText: null | string;
      gatsbyImage: IGatsbyImageData | null;
    } | null;
  } | null;
  reviewer: string;
}

const Testimonial: React.FC<TestimonialProperties> = (
  properties: TestimonialProperties,
) => {
  return (
    <Card>
      {properties.picture?.asset?.gatsbyImage !== undefined &&
        properties.picture?.asset?.gatsbyImage !== null && (
          <GatsbyImage
            alt={properties.picture.asset.altText ?? properties.reviewer}
            image={properties.picture.asset.gatsbyImage}
            imgStyle={{ borderRadius: "var(--border-radius)" }}
          ></GatsbyImage>
        )}
      <Text lang="en">
        <Comment>{properties.comment}</Comment>
        <Reviewer>- {properties.reviewer}</Reviewer>
      </Text>
    </Card>
  );
};

export default Testimonial;
