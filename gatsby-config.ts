import dotenvFlow from "dotenv-flow";
import type { GatsbyConfig } from "gatsby";

dotenvFlow.config();
const isProd = process.env.NODE_ENV === "production";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Vulfden`,
    siteUrl: `https://www.ledawolf.info`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        watchMode: !isProd,
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
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
            name: `Fira Sans`,
            file: `https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,600;0,700;0,800;1,300&display=swap`,
          },
          // { // for when code block is needed
          //   name: `Fira Code`,
          //   file: `https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap`,
          // },
          {
            name: `Homemade Apple`,
            file: `https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap`,
          },
          {
            name: "Silkscreen",
            file: `https://fonts.googleapis.com/css2?family=Silkscreen&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Leda Wolf",
        short_name: "Leda",
        start_url: "/",
        background_color: "#055b01",
        theme_color: "#121212",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/wolf.jpeg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};

export default config;
