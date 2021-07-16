import { GET_POKEMON, SEE_DETAILS } from '../actions/actionTypes';

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMON:
      console.log(action.payload);
      return action.payload;
    case SEE_DETAILS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default pokemonReducer;
