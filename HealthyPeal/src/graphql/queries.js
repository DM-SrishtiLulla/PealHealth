/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPealArticle = /* GraphQL */ `
  query GetPealArticle($id: ID!) {
    getPealArticle(id: $id) {
      id
      Title
      ArticleText
      Author
      HealthTags
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
export const listPealArticles = /* GraphQL */ `
  query ListPealArticles(
    $filter: ModelPealArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPealArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Title
        ArticleText
        Author
        HealthTags
        ImageLink
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
