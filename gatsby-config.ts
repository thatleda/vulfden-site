import dotenvFlow from "dotenv-flow";

import type { GatsbyConfig } from "gatsby";

dotenvFlow.config();
const isProduction = process.env.NODE_ENV === "production";

const config: GatsbyConfig = {
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  plugins: [
    {
      options: {
        dataset: process.env.GATSBY_SANITY_DATASET,
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        watchMode: !isProduction,
      },
      resolve: "gatsby-source-sanity",
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      __key: "images",
      options: {
        name: "images",
        path: "./src/images/",
      },
      resolve: "gatsby-source-filesystem",
    },
    {
      __key: "pages",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      resolve: "gatsby-source-filesystem",
    },
    {
      __key: "static",
      options: {
        name: "static",
        path: "./static/",
      },
      resolve: "gatsby-source-filesystem",
    },
    {
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            file: `https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,600;0,700;0,800;1,300&display=swap`,
            name: `Fira Sans`,
          },
          // { // for when code block is needed
          //   name: `Fira Code`,
          //   file: `https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap`,
          // },
          {
            file: `https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap`,
            name: `Homemade Apple`,
          },
          {
            file: `https://fonts.googleapis.com/css2?family=Silkscreen&display=swap`,
            name: "Silkscreen",
          },
        ],
      },
      resolve: `gatsby-omni-font-loader`,
    },
    {
      options: {
        background_color: "#055b01",
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/wolf.jpeg", // This path is relative to the root of the site.
        name: "Leda Wolf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        short_name: "Leda",
        start_url: "/",
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        theme_color: "#121212",
      },
      resolve: `gatsby-plugin-manifest`,
    },
  ],
  siteMetadata: {
    siteUrl: `https://www.leda.fyi`,
    title: `Vulfden`,
  },
};

export default config;
