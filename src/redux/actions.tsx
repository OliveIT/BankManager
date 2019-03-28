import { FETCH_DATA } from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { graphql, ChildDataProps } from "react-apollo";
import axios from 'axios';

import { BankItem } from '../interfaces/BankItem';
import { QUERY_GETALL, QUERY_INSERT, QUERY_UPDATE, QUERY_DELETE } from '../graphql/queries';

//const url = "http://localhost:4000/";
const url = "http://209.97.147.104:4000/"

export const fetchData = () => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    axios.post(url, {
        query: QUERY_GETALL
      })
      .then(response => {
        dispatch({ type: FETCH_DATA, payload: response.data.data.bankItems});
      });
  };
};

export const insertData = (row: BankItem, callback: () => void) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    axios.post(url, {
      query: QUERY_INSERT,
      variables: {
        row: row
      }
    })
    .then(response => {
      callback();
    })
  };
}

export const updateData = (row: BankItem) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    axios.post(url, {
      query: QUERY_UPDATE,
      variables: {
        row: row
      }
    })
    .then(response => {
      console.log("insert", response);
    })
  };
}

export const deleteData = (rowKeys: ReadonlyArray<String>) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    axios.post(url, {
      query: QUERY_DELETE,
      variables: {
        rowKeys: rowKeys
      }
    })
    .then(response => {
      console.log("insert", response);
    })
  };
}