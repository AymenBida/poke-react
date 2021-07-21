import { combineReducers } from 'redux';
import pokemon from './pokemon';
import currentPokemon from './currentPokemon';

export default combineReducers({ pokemon, currentPokemon });
