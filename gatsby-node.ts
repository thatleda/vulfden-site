import path from "path";

import { type GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
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
    // @ts-expect-error well come on, I don't want to type this shit around here
    pageData.data.allSanityArticle.pageInfo.pageCount;

  Array.from({ length: numberOfArticlePages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/ramblings` : `/ramblings/${index + 1}`,
      component: path.resolve(__dirname, `src/templates/ramblings.tsx`),
      context: {
        limit: articlesPerPage,
        skip: index * articlesPerPage,
      },
    });
  });

  // @ts-expect-error I can't be fucked, that's why
  articleData.data.allSanityArticle.nodes.forEach((node) => {
    const { id, slug } = node;
    const articlePath = `/ramblings/${slug.current}`;
    createPage({
      path: articlePath,
      component: path.resolve(__dirname, `src/templates/article.tsx`),
      context: { id, articlePath },
    });
  });
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
