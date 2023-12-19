// @ts-check

import path from "path";

import { type GatsbyNode } from "gatsby";

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pageData = await graphql(`
    query GetMeAllArticlesQuery {
      allSanityArticle {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  // @ts-expect-error I can't be fucked, that's why
  pageData.data.allSanityArticle.nodes.forEach((node) => {
    const { id, slug } = node;
    const blogPath = `/ramblings/${slug.current}`;
    createPage({
      path: blogPath,
      component: path.resolve(__dirname, `src/pages/page.tsx`),
      context: { id },
    });
  });
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}