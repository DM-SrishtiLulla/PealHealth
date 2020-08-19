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
      IdentityUsers {
        items {
          id
          identityID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
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
        IdentityUsers {
          nextToken
        }
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
      GoalUsers {
        items {
          id
          goalID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
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
        GoalUsers {
          nextToken
        }
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
      InterestUsers {
        items {
          id
          interestID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
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
        InterestUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($id: ID!) {
    getUserInfo(id: $id) {
      id
      Username
      Sub
      Identities {
        items {
          id
          identityID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      Goals {
        items {
          id
          goalID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      Interests {
        items {
          id
          interestID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      ProfileImage
      createdAt
      updatedAt
    }
  }
`;
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Username
        Sub
        Identities {
          nextToken
        }
        Goals {
          nextToken
        }
        Interests {
          nextToken
        }
        ProfileImage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInsight = /* GraphQL */ `
  query GetInsight($id: ID!) {
    getInsight(id: $id) {
      id
      InsightText
      ImageLink
      InsightGoal {
        id
        GoalText
        ImageLink
        GoalUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      InsightInterest {
        id
        InterestText
        ImageLink
        InterestUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listInsights = /* GraphQL */ `
  query ListInsights(
    $filter: ModelInsightFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInsights(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        InsightText
        ImageLink
        InsightGoal {
          id
          GoalText
          ImageLink
          createdAt
          updatedAt
        }
        InsightInterest {
          id
          InterestText
          ImageLink
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
