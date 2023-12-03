import * as React from "react";
import {
  PortableText,
  PortableTextBlockComponent,
  PortableTextProps,
  PortableTextReactComponents,
} from "@portabletext/react";
import styled from "styled-components";
import urlBuilder from "@sanity/image-url";
import { StaticImage } from "gatsby-plugin-image";

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

type ImageProps = {
  asset: {
    _ref: string;
    _type: string;
  };
  _key: string;
  _type: "image";
};

const BlockquoteComponent: PortableTextBlockComponent = ({ children }) => {
  return (
    <RespectfulSpace>
      <Blockquote lang="en">{children}</Blockquote>
    </RespectfulSpace>
  );
};

const SubQuoteComponent: PortableTextBlockComponent = ({ children }) => {
  return (
    <RightAligned>
      <sub>— {children}</sub>
    </RightAligned>
  );
};

const ImageComponent = (props: any) => {
  const imageSrc = urlBuilder({ projectId: "brvct6ie", dataset: "production" })
    .image(props.value.asset)
    .fit("fillmax")
    .auto("format")
    .url();

  return (
    <RespectfulSpace>
      <ObedientImage
        src={imageSrc}
        loading="lazy"
        alt={props.value.alt}
      ></ObedientImage>
    </RespectfulSpace>
  );
};

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ImageComponent,
  },
  block: {
    blockquote: BlockquoteComponent,
    sub: SubQuoteComponent,
  },
};

const PortableBlock: React.FC<PortableTextProps> = ({ value }) => {
  return <PortableText value={value} components={components} />;
};

export default PortableBlock;
