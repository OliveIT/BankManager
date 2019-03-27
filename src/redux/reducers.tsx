import { combineReducers } from "redux";
import { FETCH_DATA } from './types';

const initialState = {
  data: {},
}

const reducer = (state = initialState, action: any) => {
  switch(action.type) {
      case FETCH_DATA:
        return {...state, data: action.payload};
      default: 
        return state;
  }
}


export default combineReducers({
  reducer: reducer,
});
