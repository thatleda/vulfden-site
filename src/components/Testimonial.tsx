import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const Card = styled.div`
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

export const Testimonial = styled.div`
  display: grid;
  width: 100%;
  padding: 5rem;

  @media (max-width: 700px) {
    display: grid;
    padding: 2rem 0;
  }
`;

export const Comment = styled.q`
  quotes: auto;
`;

export const Reviewer = styled.span`
  padding-top: 1rem;
  text-align: right;
  font-weight: 600;
  text-decoration: solid;
`;
