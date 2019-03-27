import axios from 'axios';
import { QUERY_GETALL, QUERY_INSERT, QUERY_UPDATE, QUERY_DELETE } from '../graphql/queries';

const url = "http://localhost:4000/";

const testRow = {
  id: String((new Date()).getTime()),
  account: "Gregory House",
  employee: "Dr. Gregory House",
  bank: "Citibank",
  branch: "LA Central",
  accType: "Savings",
  accNumber: "0000042",
  empNumber: "012345678901234",
  lastUpdate: (new Date()).toDateString(),
}

test('Test FetchData', async () => {
  let response = await axios.post(url, {
    query: QUERY_GETALL
  });
  expect(typeof response).toBe("object");
});

test('Test InsertData', async () => {
  let response = await axios.post(url, {
    query: QUERY_INSERT,
    variables: {
      row: testRow
    }
  });
  const data = response.data.data.createItem;
  delete testRow.id;
  expect(data).toEqual(testRow);
});

test('Test UpdateData', async () => {
  let response = await axios.post(url, {
    query: QUERY_UPDATE,
    variables: {
      row: testRow
    }
  });
  const data = response.data.data.updateItem;
  expect(data).toEqual(testRow);
});

test('Test DeleteData', async () => {
  const rowKeys = [
    String((new Date()).getTime()),
    String((new Date()).getTime())];
  let response = await axios.post(url, {
    query: QUERY_DELETE,
    variables: {
      rowKeys: rowKeys
    }
  });
  const data = response.data.data.deleteItem;
  expect(data).toEqual(rowKeys.length);
});



