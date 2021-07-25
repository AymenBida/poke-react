import { GET_POKEMON } from '../actions/actionTypes';

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMON:
      return action.payload;
    default:
      return state;
  }
};

export default pokemonReducer;
