import { type GatsbyNode } from "gatsby";

import path from "node:path";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;
  const articlesPerPage = 5;

  const pageData = await graphql(`
    query GetMeAllArticles {
      allSanityArticle(limit: ${articlesPerPage}) {
        pageInfo {
          pageCount
        }
      }
    }
  `);

  const articleData = await graphql(`
    query GetMeAllArticles {
      allSanityArticle {
        pageInfo {
          pageCount
        }
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  const numberOfArticlePages =
    // @ts-expect-error I have no type generation available here
    pageData.data.allSanityArticle.pageInfo.pageCount;

  for (const [index] of Array.from({
    length: numberOfArticlePages,
  }).entries()) {
    createPage({
      component: path.resolve(__dirname, `src/templates/ramblings.tsx`),
      context: {
        limit: articlesPerPage,
        skip: index * articlesPerPage,
      },
      path: index === 0 ? `/ramblings` : `/ramblings/${index + 1}`,
    });
  }

  // @ts-expect-error I can't be fucked, that's why
  for (const node of articleData.data.allSanityArticle.nodes) {
    const { id, slug } = node;
    const articlePath = `/ramblings/${slug.current}`;
    createPage({
      component: path.resolve(__dirname, `src/templates/article.tsx`),
      context: { articlePath, id },
      path: articlePath,
    });
  }
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
      },
    },
  });
};
