import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPokemon, seeDetails } from '../redux/actions';
import { capitalize, getRange } from '../utilities';
import { callPokemonAPI, findPokemon } from '../api';

const App = () => {
  const pokemonCount = getRange(251);
  const pokemonList = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  const fetchAllPokemon = async () => {
    const response = await callPokemonAPI();
    dispatch(getPokemon(response));
  };

  const fetchPokemon = async (id) => {
    const response = await findPokemon(id);
    dispatch(seeDetails(response));
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  return (
    <ul>
      {pokemonList
        .map((entry, index) => (
          <li key={pokemonCount[index]}>
            {`${pokemonCount[index]}. ${capitalize(entry.name)} `}
            <button type="button" onClick={() => { fetchPokemon(pokemonCount[index]); }}>See details</button>
          </li>
        ))}
    </ul>
  );
};

export default App;
