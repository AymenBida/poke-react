import { FILTER_NAME, GET_POKEMON, SEE_DETAILS } from './actionTypes';

export const getPokemon = (response) => ({
  type: GET_POKEMON,
  payload: response,
});

export const seeDetails = ({ data }) => ({
  type: SEE_DETAILS,
  payload: {
    name: data.name,
    image: data.sprites.front_default,
    type1: data.types[0].type.name,
    type2: data.types[1]?.type.name ?? null,
  },
});

export const filterName = ({ value }) => ({
  type: FILTER_NAME,
  payload: value,
});
