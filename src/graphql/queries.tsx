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

export const QUERY_INSERT = `
  mutation m($row: BankItemInput!) {
    createItem(row: $row) {
      account
      employee
      bank
      branch
      accType
      accNumber
      empNumber
      lastUpdate
    }
  }`;

export const QUERY_UPDATE = `
  mutation m($row: BankItemInput!) {
    updateItem(row: $row) {
      account
      employee
      bank
      branch
      accType
      accNumber
      empNumber
      lastUpdate
    }
  }`;

  export const QUERY_DELETE = `
    mutation m($rowKeys: [String]) {
      deleteItem(rowKeys: $rowKeys)
    }`;

  