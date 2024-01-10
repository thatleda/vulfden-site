import React from "react";
import styled from "styled-components";

import {
  PortableText,
  type PortableTextProps,
  type PortableTextReactComponents,
  type PortableTextTypeComponent,
  type PortableTextTypeComponentProps,
} from "@portabletext/react";
import { type SanityImageSource } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";

const Blockquote = styled.q`
  quotes: auto;
  font-style: italic;
`;

const RightAligned = styled.div`
  text-align: right;
  padding: 0;
`;

const RespectfulSpace = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const ObedientImage = styled.img`
  width: 80vw;
`;

const CenterAligned = styled.pre`
  font-family: var(--base-font);
  text-align: center;
  font-style: italic;
`;

const ImageComponent: PortableTextTypeComponent = ({
  value,
}: PortableTextTypeComponentProps<{
  asset: SanityImageSource;
  alt: string;
}>) => {
  const imageSrc = urlBuilder({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID ?? "",
    dataset: process.env.GATSBY_SANITY_DATASET ?? "",
  })
    .image(value.asset)
    .fit("fillmax")
    .auto("format")
    .url();

  return (
    <RespectfulSpace>
      <ObedientImage
        src={imageSrc}
        loading="lazy"
        alt={value.alt}
      ></ObedientImage>
    </RespectfulSpace>
  );
};

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ImageComponent,
  },
  block: {
    pre: ({ children }) => <CenterAligned>{children}</CenterAligned>,
    blockquote: ({ children }) => (
      <RespectfulSpace>
        <Blockquote lang="en">{children}</Blockquote>
      </RespectfulSpace>
    ),
    sub: ({ children }) => {
      return (
        <RightAligned>
          <sub>— {children}</sub>
        </RightAligned>
      );
    },
  },
};

const PortableBlock: React.FC<PortableTextProps> = ({ value }) => {
  if (value !== null) {
    return <PortableText value={value} components={components} />;
  }
  return value;
};

export default PortableBlock;
