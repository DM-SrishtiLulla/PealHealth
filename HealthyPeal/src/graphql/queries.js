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
export const getIdentity = /* GraphQL */ `
  query GetIdentity($id: ID!) {
    getIdentity(id: $id) {
      id
      IdentityText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
export const listIdentitys = /* GraphQL */ `
  query ListIdentitys(
    $filter: ModelIdentityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIdentitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        IdentityText
        ImageLink
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGoal = /* GraphQL */ `
  query GetGoal($id: ID!) {
    getGoal(id: $id) {
      id
      GoalText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
export const listGoals = /* GraphQL */ `
  query ListGoals(
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        GoalText
        ImageLink
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInterest = /* GraphQL */ `
  query GetInterest($id: ID!) {
    getInterest(id: $id) {
      id
      InterestText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
export const listInterests = /* GraphQL */ `
  query ListInterests(
    $filter: ModelInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInterests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        InterestText
        ImageLink
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
