import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getPokemon from '../redux/actions';
import { capitalize, getRange } from '../utilities';
import callPokemonAPI from '../api';

const App = () => {
  const pokemonCount = getRange(251);
  const pokemonList = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  const fetchPokemon = async () => {
    try {
      const response = await callPokemonAPI();
      dispatch(getPokemon(response));
      return null;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <ul>
      {pokemonList
        .map((entry, index) => (
          <li key={pokemonCount[index]}>
            {`${pokemonCount[index]}. ${capitalize(entry.name)}`}
          </li>
        ))}
    </ul>
  );
};

export default App;
