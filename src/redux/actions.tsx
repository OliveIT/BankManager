import { FETCH_DATA } from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { graphql, ChildDataProps } from "react-apollo";
import axios from 'axios';

import { BankItem } from '../interfaces/BankItem';
import { QUERY_GETALL, QUERY_INSERT } from '../graphql/queries';

const url = "http://localhost:4000/";

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

export const insertData = (row: BankItem) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    axios.post(url, {
      query: QUERY_INSERT,
      variables: {
        row: row
      }
    })
    .then(response => {
      console.log("insert", response);
    })
  };
}