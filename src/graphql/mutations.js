/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCurrent = /* GraphQL */ `
  mutation CreateCurrent(
    $input: CreateCurrentInput!
    $condition: ModelCurrentConditionInput
  ) {
    createCurrent(input: $input, condition: $condition) {
      id
      driver
      vehicle_number
      hazmat
      load_description
      createdAt
      updatedAt
    }
  }
`;
export const updateCurrent = /* GraphQL */ `
  mutation UpdateCurrent(
    $input: UpdateCurrentInput!
    $condition: ModelCurrentConditionInput
  ) {
    updateCurrent(input: $input, condition: $condition) {
      id
      driver
      vehicle_number
      hazmat
      load_description
      createdAt
      updatedAt
    }
  }
`;
export const deleteCurrent = /* GraphQL */ `
  mutation DeleteCurrent(
    $input: DeleteCurrentInput!
    $condition: ModelCurrentConditionInput
  ) {
    deleteCurrent(input: $input, condition: $condition) {
      id
      driver
      vehicle_number
      hazmat
      load_description
      createdAt
      updatedAt
    }
  }
`;
export const createFuture = /* GraphQL */ `
  mutation CreateFuture(
    $input: CreateFutureInput!
    $condition: ModelFutureConditionInput
  ) {
    createFuture(input: $input, condition: $condition) {
      id
      date_scheduled
      date_due
      load_description
      createdAt
      updatedAt
    }
  }
`;
export const updateFuture = /* GraphQL */ `
  mutation UpdateFuture(
    $input: UpdateFutureInput!
    $condition: ModelFutureConditionInput
  ) {
    updateFuture(input: $input, condition: $condition) {
      id
      date_scheduled
      date_due
      load_description
      createdAt
      updatedAt
    }
  }
`;
export const deleteFuture = /* GraphQL */ `
  mutation DeleteFuture(
    $input: DeleteFutureInput!
    $condition: ModelFutureConditionInput
  ) {
    deleteFuture(input: $input, condition: $condition) {
      id
      date_scheduled
      date_due
      load_description
      createdAt
      updatedAt
    }
  }
`;
