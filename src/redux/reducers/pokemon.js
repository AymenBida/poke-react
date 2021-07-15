import GET_POKEMON from '../actions/actionTypes';

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMON:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default pokemonReducer;
