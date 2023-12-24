import { GatsbyImage, type IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
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
`;

const Reviewer = styled.b`
  padding-top: 1rem;
  text-align: right;
  text-decoration: solid;
`;

export interface TestimonialProps {
  reviewer: string;
  comment: string;
  picture: {
    asset: { gatsbyImageData: IGatsbyImageData; altText: string | null } | null;
  } | null;
}

const Testimonial: React.FC<TestimonialProps> = (props: TestimonialProps) => {
  return (
    <Card>
      {props.picture?.asset !== undefined && props.picture?.asset !== null && (
        <GatsbyImage
          image={props.picture.asset.gatsbyImageData}
          alt={props.picture.asset.altText ?? props.reviewer}
          imgStyle={{ borderRadius: 20 }}
        ></GatsbyImage>
      )}
      <Text lang="en">
        <Comment>{props.comment}</Comment>
        <Reviewer>- {props.reviewer}</Reviewer>
      </Text>
    </Card>
  );
};

export default Testimonial;
