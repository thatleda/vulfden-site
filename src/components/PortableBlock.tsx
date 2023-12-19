import {
  PortableText,
  type PortableTextProps,
  type PortableTextReactComponents,
  type PortableTextTypeComponent,
  type PortableTextTypeComponentProps,
} from "@portabletext/react";
import { type SanityImageSource } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import React from "react";
import styled from "styled-components";

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

const ImageComponent: PortableTextTypeComponent = ({
  value,
}: PortableTextTypeComponentProps<{
  asset: SanityImageSource;
  alt: string;
}>) => {
  const imageSrc = urlBuilder({ projectId: "brvct6ie", dataset: "production" })
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
