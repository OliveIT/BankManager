import gql from "graphql-tag";

export const QUERY_GETALL = `
  query {
    bankItems {
      id
      account
      employee
      bank
      branch
      accType
      accNumber
      empNumber
      lastUpdate
    }
  }
`;