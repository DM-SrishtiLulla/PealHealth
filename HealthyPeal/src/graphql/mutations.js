/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPealArticle = /* GraphQL */ `
  mutation CreatePealArticle(
    $input: CreatePealArticleInput!
    $condition: ModelPealArticleConditionInput
  ) {
    createPealArticle(input: $input, condition: $condition) {
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
export const updatePealArticle = /* GraphQL */ `
  mutation UpdatePealArticle(
    $input: UpdatePealArticleInput!
    $condition: ModelPealArticleConditionInput
  ) {
    updatePealArticle(input: $input, condition: $condition) {
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
export const deletePealArticle = /* GraphQL */ `
  mutation DeletePealArticle(
    $input: DeletePealArticleInput!
    $condition: ModelPealArticleConditionInput
  ) {
    deletePealArticle(input: $input, condition: $condition) {
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
export const createIdentity = /* GraphQL */ `
  mutation CreateIdentity(
    $input: CreateIdentityInput!
    $condition: ModelIdentityConditionInput
  ) {
    createIdentity(input: $input, condition: $condition) {
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
export const updateIdentity = /* GraphQL */ `
  mutation UpdateIdentity(
    $input: UpdateIdentityInput!
    $condition: ModelIdentityConditionInput
  ) {
    updateIdentity(input: $input, condition: $condition) {
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
export const deleteIdentity = /* GraphQL */ `
  mutation DeleteIdentity(
    $input: DeleteIdentityInput!
    $condition: ModelIdentityConditionInput
  ) {
    deleteIdentity(input: $input, condition: $condition) {
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
export const createGoal = /* GraphQL */ `
  mutation CreateGoal(
    $input: CreateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    createGoal(input: $input, condition: $condition) {
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
export const updateGoal = /* GraphQL */ `
  mutation UpdateGoal(
    $input: UpdateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    updateGoal(input: $input, condition: $condition) {
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
export const deleteGoal = /* GraphQL */ `
  mutation DeleteGoal(
    $input: DeleteGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    deleteGoal(input: $input, condition: $condition) {
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
export const createInterest = /* GraphQL */ `
  mutation CreateInterest(
    $input: CreateInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    createInterest(input: $input, condition: $condition) {
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
export const updateInterest = /* GraphQL */ `
  mutation UpdateInterest(
    $input: UpdateInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    updateInterest(input: $input, condition: $condition) {
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
export const deleteInterest = /* GraphQL */ `
  mutation DeleteInterest(
    $input: DeleteInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    deleteInterest(input: $input, condition: $condition) {
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
export const createUserIdentities = /* GraphQL */ `
  mutation CreateUserIdentities(
    $input: CreateUserIdentitiesInput!
    $condition: ModelUserIdentitiesConditionInput
  ) {
    createUserIdentities(input: $input, condition: $condition) {
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
        ProfileImage
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUserIdentities = /* GraphQL */ `
  mutation UpdateUserIdentities(
    $input: UpdateUserIdentitiesInput!
    $condition: ModelUserIdentitiesConditionInput
  ) {
    updateUserIdentities(input: $input, condition: $condition) {
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
        ProfileImage
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserIdentities = /* GraphQL */ `
  mutation DeleteUserIdentities(
    $input: DeleteUserIdentitiesInput!
    $condition: ModelUserIdentitiesConditionInput
  ) {
    deleteUserIdentities(input: $input, condition: $condition) {
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
        ProfileImage
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserGoals = /* GraphQL */ `
  mutation CreateUserGoals(
    $input: CreateUserGoalsInput!
    $condition: ModelUserGoalsConditionInput
  ) {
    createUserGoals(input: $input, condition: $condition) {
      id
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
        ProfileImage
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUserGoals = /* GraphQL */ `
  mutation UpdateUserGoals(
    $input: UpdateUserGoalsInput!
    $condition: ModelUserGoalsConditionInput
  ) {
    updateUserGoals(input: $input, condition: $condition) {
      id
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
        ProfileImage
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserGoals = /* GraphQL */ `
  mutation DeleteUserGoals(
    $input: DeleteUserGoalsInput!
    $condition: ModelUserGoalsConditionInput
  ) {
    deleteUserGoals(input: $input, condition: $condition) {
      id
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
        ProfileImage
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserInterests = /* GraphQL */ `
  mutation CreateUserInterests(
    $input: CreateUserInterestsInput!
    $condition: ModelUserInterestsConditionInput
  ) {
    createUserInterests(input: $input, condition: $condition) {
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
        ProfileImage
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUserInterests = /* GraphQL */ `
  mutation UpdateUserInterests(
    $input: UpdateUserInterestsInput!
    $condition: ModelUserInterestsConditionInput
  ) {
    updateUserInterests(input: $input, condition: $condition) {
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
        ProfileImage
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserInterests = /* GraphQL */ `
  mutation DeleteUserInterests(
    $input: DeleteUserInterestsInput!
    $condition: ModelUserInterestsConditionInput
  ) {
    deleteUserInterests(input: $input, condition: $condition) {
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
        ProfileImage
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
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
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
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
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
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
export const createInsight = /* GraphQL */ `
  mutation CreateInsight(
    $input: CreateInsightInput!
    $condition: ModelInsightConditionInput
  ) {
    createInsight(input: $input, condition: $condition) {
      id
      InsightText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
export const updateInsight = /* GraphQL */ `
  mutation UpdateInsight(
    $input: UpdateInsightInput!
    $condition: ModelInsightConditionInput
  ) {
    updateInsight(input: $input, condition: $condition) {
      id
      InsightText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
export const deleteInsight = /* GraphQL */ `
  mutation DeleteInsight(
    $input: DeleteInsightInput!
    $condition: ModelInsightConditionInput
  ) {
    deleteInsight(input: $input, condition: $condition) {
      id
      InsightText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      PostText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      PostText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      PostText
      ImageLink
      createdAt
      updatedAt
    }
  }
`;
