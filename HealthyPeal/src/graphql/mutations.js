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
