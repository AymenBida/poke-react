import axios from 'axios';

export const callPokemonAPI = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=251');
    return response;
  } catch (error) {
    return error;
  }
};

export const findPokemon = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return response;
  } catch (error) {
    return error;
  }
};
