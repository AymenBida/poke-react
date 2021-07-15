import axios from 'axios';

const callPokemonAPI = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=251');
    return response;
  } catch (error) {
    return error;
  }
};

export default callPokemonAPI;
