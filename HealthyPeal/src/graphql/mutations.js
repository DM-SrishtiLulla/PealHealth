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
      Username
      Sub
      Identities {
        id
        IdentityText
        ImageLink
        createdAt
        updatedAt
      }
      Goals {
        id
        GoalText
        ImageLink
        createdAt
        updatedAt
      }
      Interests {
        id
        InterestText
        ImageLink
        createdAt
        updatedAt
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
      Username
      Sub
      Identities {
        id
        IdentityText
        ImageLink
        createdAt
        updatedAt
      }
      Goals {
        id
        GoalText
        ImageLink
        createdAt
        updatedAt
      }
      Interests {
        id
        InterestText
        ImageLink
        createdAt
        updatedAt
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
      Username
      Sub
      Identities {
        id
        IdentityText
        ImageLink
        createdAt
        updatedAt
      }
      Goals {
        id
        GoalText
        ImageLink
        createdAt
        updatedAt
      }
      Interests {
        id
        InterestText
        ImageLink
        createdAt
        updatedAt
      }
      ProfileImage
      createdAt
      updatedAt
    }
  }
`;
