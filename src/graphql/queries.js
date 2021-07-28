/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCurrent = /* GraphQL */ `
  query GetCurrent($id: ID!) {
    getCurrent(id: $id) {
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
export const listCurrents = /* GraphQL */ `
  query ListCurrents(
    $filter: ModelCurrentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCurrents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        driver
        vehicle_number
        hazmat
        load_description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFuture = /* GraphQL */ `
  query GetFuture($id: ID!) {
    getFuture(id: $id) {
      id
      date_scheduled
      date_due
      load_description
      createdAt
      updatedAt
    }
  }
`;
export const listFutures = /* GraphQL */ `
  query ListFutures(
    $filter: ModelFutureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFutures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date_scheduled
        date_due
        load_description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
