import { FILTER_NAME, GET_POKEMON, SEE_DETAILS } from './actionTypes';

export const getPokemon = (response) => ({
  type: GET_POKEMON,
  payload: response,
});

export const seeDetails = ({ data }) => ({
  type: SEE_DETAILS,
  payload: {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    type1: data.types[0].type.name,
    type2: data.types[1]?.type.name ?? null,
    stats: {
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      spAttack: data.stats[3].base_stat,
      spDefense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
    },
  },
});

export const filterName = ({ value }) => ({
  type: FILTER_NAME,
  payload: value,
});
