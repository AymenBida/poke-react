import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import {
  Link, Route,
} from 'react-router-dom';
import { getPokemon } from '../redux/actions';
import { capitalize, getRange } from '../utilities';
import { callPokemonAPI } from '../api';

const App = () => {
  const { path } = useRouteMatch();

  const pokemonCount = getRange(251);
  const pokemonList = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  const fetchAllPokemon = async () => {
    const response = await callPokemonAPI();
    dispatch(getPokemon(response));
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  return (
    <div>
      <Route exact path={path}>
        <ul>
          {pokemonList
            .map((entry, index) => (
              <li key={pokemonCount[index]}>
                {`${pokemonCount[index]}. ${capitalize(entry.name)} `}
                <Link to={`/pokemon/${pokemonCount[index]}`}>See details</Link>
              </li>
            ))}
        </ul>
      </Route>
    </div>
  );
};

export default App;
