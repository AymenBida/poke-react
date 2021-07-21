import { combineReducers } from 'redux';
import pokemon from './pokemon';
import currentPokemon from './currentPokemon';
import filter from './filter';

export default combineReducers({ pokemon, currentPokemon, filter });
