import { GET_POKEMON, SEE_DETAILS } from './actionTypes';

export const getPokemon = (response) => ({
  type: GET_POKEMON,
  payload: response.data.results,
});

export const seeDetails = (response) => ({
  type: SEE_DETAILS,
  payload: response,
});
