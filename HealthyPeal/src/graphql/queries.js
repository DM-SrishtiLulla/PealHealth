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
          goalID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      Insights {
        items {
          id
          InsightText
          ImageLink
          createdAt
          updatedAt
          goalID
        }
        nextToken
      }
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
        Insights {
          nextToken
        }
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
      Insights {
        items {
          insightID
          userID
          createdAt
          updatedAt
          status
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
        Insights {
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
      InsightUsers {
        items {
          insightID
          userID
          createdAt
          updatedAt
          status
        }
        nextToken
      }
      InsightText
      ImageLink
      createdAt
      updatedAt
      goalID
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
        InsightUsers {
          nextToken
        }
        InsightText
        ImageLink
        createdAt
        updatedAt
        goalID
      }
      nextToken
    }
  }
`;
export const getUserInsights = /* GraphQL */ `
  query GetUserInsights($userID: ID!, $insightID: ID!) {
    getUserInsights(userID: $userID, insightID: $insightID) {
      insightID
      userID
      insight {
        id
        InsightUsers {
          nextToken
        }
        InsightText
        ImageLink
        createdAt
        updatedAt
        goalID
      }
      user {
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
        Insights {
          nextToken
        }
        ProfileImage
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      status
    }
  }
`;
export const listUserInsightss = /* GraphQL */ `
  query ListUserInsightss(
    $userID: ID
    $insightID: ModelIDKeyConditionInput
    $filter: ModelUserInsightsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserInsightss(
      userID: $userID
      insightID: $insightID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        insightID
        userID
        insight {
          id
          InsightText
          ImageLink
          createdAt
          updatedAt
          goalID
        }
        user {
          id
          Username
          Sub
          ProfileImage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        status
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      PostText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        PostText
        ImageLink
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
