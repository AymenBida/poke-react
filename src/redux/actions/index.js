import GET_POKEMON from './actionTypes';

const getPokemon = (response) => ({
  type: GET_POKEMON,
  payload: response.data.results,
});

export default getPokemon;
