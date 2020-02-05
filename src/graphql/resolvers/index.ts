import { articleController } from '../../controllers';

export const graphQLResolvers = {
  // QUERIES
  articles: articleController.getAllArticles,
  getArticleById: articleController.getArticlesByID,

  // MUTATIONS
  createArticle: articleController.createArticle
};
