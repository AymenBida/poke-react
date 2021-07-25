import { FILTER_NAME } from '../actions/actionTypes';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_NAME:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
