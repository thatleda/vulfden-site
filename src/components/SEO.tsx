import React from "react";

import { useMediaQuery } from "usehooks-ts";

interface SEOProperties {
  description: string;
  location: string;
  title: string;
}

const SEO: React.FC<SEOProperties> = (properties: SEOProperties) => {
  const { description, title } = properties;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <>
      <title>{title}</title>
      <html lang="en" />
      <meta content={description} name="description"></meta>
      <meta content="https://leda.fyi/wolf.png" name="image" />
      <meta content={prefersDarkMode ? "dark" : "light"} name="theme-color" />
      <meta content="The website of Leda Wolf" property="og:title" />
      <meta content="Vulfden" property="og:site_name" />
      <meta
        content={`https://leda.fyi${properties.location}`}
        property="og:url"
      />
      <meta content={description} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content="summary" property="twitter:card" />
      <meta content="thatleda" property="twitter:creator" />
      <meta content={title} property="twitter:title" />
      <meta content={description} property="twitter:description" />
    </>
  );
};

export default SEO;
