import { SEE_DETAILS } from '../actions/actionTypes';

const currentPokemonReducer = (state = [], action) => {
  switch (action.type) {
    case SEE_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default currentPokemonReducer;
