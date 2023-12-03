// @ts-check

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
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

  pageData.data.allSanityArticle.nodes.forEach((node) => {
    const { id, slug } = node;
    const path = `/ramblings/${slug.current}`;
    createPage({
      path,
      component: require("path").resolve(`./src/pages/page.tsx`),
      context: { id },
    });
  });
};
