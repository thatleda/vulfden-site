import React from "react";

import styled from "styled-components";

import {
  PortableText,
  type PortableTextProps,
  type PortableTextReactComponents,
  type PortableTextTypeComponent,
  type PortableTextTypeComponentProps,
} from "@portabletext/react";
import urlBuilder from "@sanity/image-url";

import type { SanityImageSource } from "@sanity/asset-utils";

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
  alt: string;
  asset: SanityImageSource;
}>) => {
  const imageSource = urlBuilder({
    dataset: process.env.GATSBY_SANITY_DATASET ?? "",
    projectId: process.env.GATSBY_SANITY_PROJECT_ID ?? "",
  })
    .image(value.asset)
    .fit("fillmax")
    .auto("format")
    .url();

  return (
    <RespectfulSpace>
      <ObedientImage
        alt={value.alt}
        loading="lazy"
        src={imageSource}
      ></ObedientImage>
    </RespectfulSpace>
  );
};

const components: Partial<PortableTextReactComponents> = {
  block: {
    blockquote: ({ children }) => (
      <RespectfulSpace>
        <Blockquote lang="en">{children}</Blockquote>
      </RespectfulSpace>
    ),
    pre: ({ children }) => <CenterAligned>{children}</CenterAligned>,
    sub: ({ children }) => {
      return (
        <RightAligned>
          <sub>— {children}</sub>
        </RightAligned>
      );
    },
  },
  types: {
    image: ImageComponent,
  },
};

const PortableBlock: React.FC<PortableTextProps> = ({ value }) => {
  if (value !== null) {
    return <PortableText components={components} value={value} />;
  }
  return value;
};

export default PortableBlock;
