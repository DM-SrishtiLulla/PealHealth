/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePealArticle = /* GraphQL */ `
  subscription OnCreatePealArticle {
    onCreatePealArticle {
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
export const onUpdatePealArticle = /* GraphQL */ `
  subscription OnUpdatePealArticle {
    onUpdatePealArticle {
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
export const onDeletePealArticle = /* GraphQL */ `
  subscription OnDeletePealArticle {
    onDeletePealArticle {
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
export const onCreateIdentity = /* GraphQL */ `
  subscription OnCreateIdentity {
    onCreateIdentity {
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
export const onUpdateIdentity = /* GraphQL */ `
  subscription OnUpdateIdentity {
    onUpdateIdentity {
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
export const onDeleteIdentity = /* GraphQL */ `
  subscription OnDeleteIdentity {
    onDeleteIdentity {
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
export const onCreateGoal = /* GraphQL */ `
  subscription OnCreateGoal {
    onCreateGoal {
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
export const onUpdateGoal = /* GraphQL */ `
  subscription OnUpdateGoal {
    onUpdateGoal {
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
export const onDeleteGoal = /* GraphQL */ `
  subscription OnDeleteGoal {
    onDeleteGoal {
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
export const onCreateInterest = /* GraphQL */ `
  subscription OnCreateInterest {
    onCreateInterest {
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
export const onUpdateInterest = /* GraphQL */ `
  subscription OnUpdateInterest {
    onUpdateInterest {
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
export const onDeleteInterest = /* GraphQL */ `
  subscription OnDeleteInterest {
    onDeleteInterest {
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
export const onCreateUserIdentities = /* GraphQL */ `
  subscription OnCreateUserIdentities {
    onCreateUserIdentities {
      id
      identityID
      userID
      identity {
        id
        IdentityText
        ImageLink
        IdentityUsers {
          nextToken
        }
        createdAt
        updatedAt
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
    }
  }
`;
export const onUpdateUserIdentities = /* GraphQL */ `
  subscription OnUpdateUserIdentities {
    onUpdateUserIdentities {
      id
      identityID
      userID
      identity {
        id
        IdentityText
        ImageLink
        IdentityUsers {
          nextToken
        }
        createdAt
        updatedAt
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
    }
  }
`;
export const onDeleteUserIdentities = /* GraphQL */ `
  subscription OnDeleteUserIdentities {
    onDeleteUserIdentities {
      id
      identityID
      userID
      identity {
        id
        IdentityText
        ImageLink
        IdentityUsers {
          nextToken
        }
        createdAt
        updatedAt
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
    }
  }
`;
export const onCreateUserGoals = /* GraphQL */ `
  subscription OnCreateUserGoals {
    onCreateUserGoals {
      goalID
      userID
      goal {
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
    }
  }
`;
export const onUpdateUserGoals = /* GraphQL */ `
  subscription OnUpdateUserGoals {
    onUpdateUserGoals {
      goalID
      userID
      goal {
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
    }
  }
`;
export const onDeleteUserGoals = /* GraphQL */ `
  subscription OnDeleteUserGoals {
    onDeleteUserGoals {
      goalID
      userID
      goal {
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
    }
  }
`;
export const onCreateUserInterests = /* GraphQL */ `
  subscription OnCreateUserInterests {
    onCreateUserInterests {
      id
      interestID
      userID
      interest {
        id
        InterestText
        ImageLink
        InterestUsers {
          nextToken
        }
        createdAt
        updatedAt
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
    }
  }
`;
export const onUpdateUserInterests = /* GraphQL */ `
  subscription OnUpdateUserInterests {
    onUpdateUserInterests {
      id
      interestID
      userID
      interest {
        id
        InterestText
        ImageLink
        InterestUsers {
          nextToken
        }
        createdAt
        updatedAt
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
    }
  }
`;
export const onDeleteUserInterests = /* GraphQL */ `
  subscription OnDeleteUserInterests {
    onDeleteUserInterests {
      id
      interestID
      userID
      interest {
        id
        InterestText
        ImageLink
        InterestUsers {
          nextToken
        }
        createdAt
        updatedAt
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
    }
  }
`;
export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo {
    onCreateUserInfo {
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
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo {
    onUpdateUserInfo {
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
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo {
    onDeleteUserInfo {
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
export const onCreateInsight = /* GraphQL */ `
  subscription OnCreateInsight {
    onCreateInsight {
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
export const onUpdateInsight = /* GraphQL */ `
  subscription OnUpdateInsight {
    onUpdateInsight {
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
export const onDeleteInsight = /* GraphQL */ `
  subscription OnDeleteInsight {
    onDeleteInsight {
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
export const onCreateUserInsights = /* GraphQL */ `
  subscription OnCreateUserInsights {
    onCreateUserInsights {
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
export const onUpdateUserInsights = /* GraphQL */ `
  subscription OnUpdateUserInsights {
    onUpdateUserInsights {
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
export const onDeleteUserInsights = /* GraphQL */ `
  subscription OnDeleteUserInsights {
    onDeleteUserInsights {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      PostText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      PostText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      PostText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
