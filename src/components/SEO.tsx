import React from "react";
import { useMediaQuery } from "usehooks-ts";

interface SEOProps {
  title: string;
  description: string;
  location: string;
}

const SEO: React.FC<SEOProps> = (props: SEOProps) => {
  const { title, description } = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <>
      <title>{title}</title>
      <html lang="en" />
      <meta name="description" content={description}></meta>
      <meta name="image" content="https://leda.fyi/wolf.png" />
      <meta name="theme-color" content={prefersDarkMode ? "dark" : "light"} />
      <meta property="og:title" content="The website of Leda Wolf" />
      <meta property="og:site_name" content="Vulfden" />
      <meta property="og:url" content={`https://leda.fyi${props.location}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content="thatleda" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </>
  );
};

export default SEO;
