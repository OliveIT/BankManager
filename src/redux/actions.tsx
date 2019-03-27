import { FETCH_DATA } from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { graphql, ChildDataProps } from "react-apollo";
import axios from 'axios';

import { QUERY_GETALL } from '../graphql/queries';

export const fetchData = () => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    console.log("fetchData");
    axios.post("http://localhost:4000/",{
        query: QUERY_GETALL
      })
      .then(response => {
        dispatch({ type: FETCH_DATA, payload: response.data.data.bankItems});
      });
  };
};