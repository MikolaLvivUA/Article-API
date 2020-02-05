import { buildSchema } from 'graphql';
import { ArticleInputData } from '../inputs';
import { ArticleType } from '../types/article';

export const graphQLRootSchema = buildSchema(`

  ${ArticleInputData}

  ${ArticleType}

  type TestData {
    text: String
    value: Int
  }

  type RootMutation {
    createArticle(articleInputData: ArticleInputData): String!
  }

  type RootQuery {
    articles: [Article]!
    getArticleById(id: Int): Article!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
