import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Vulfden`,
    siteUrl: `https://www.leda.fyi`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "brvct6ie",
        dataset: "production",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: "./static/",
      },
      __key: "static",
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Homemade Apple`,
            file: `https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap`,
          },
          {
            name: `Nunito Sans`,
            file: `https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@300,500&display=swap`,
          },
          {
            name: "Silkscreen",
            file: `https://fonts.googleapis.com/css2?family=Silkscreen&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
