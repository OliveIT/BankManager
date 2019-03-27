import { FETCH_DATA } from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

export const fetchData = () => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({ type: FETCH_DATA, payload: null});
  };
};