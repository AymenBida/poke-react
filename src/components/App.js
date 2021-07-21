import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import {
  Link, Route,
} from 'react-router-dom';
import { getPokemon } from '../redux/actions';
import { capitalize, numeratePokemon } from '../utilities';
import { callPokemonAPI } from '../api';
import Filter from './Filter';

const App = () => {
  const { path } = useRouteMatch();

  const pokemonList = useSelector((state) => state.pokemon);
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredList = pokemonList.filter((element) => element.name.match(new RegExp(filterValue, 'g')));

  const fetchAllPokemon = async () => {
    const response = await callPokemonAPI();
    const numeratedPokemon = numeratePokemon(response);
    dispatch(getPokemon(numeratedPokemon));
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  return (
    <div>
      <Route exact path={path}>
        <Filter />
        <ul>
          {filteredList
            .map((entry) => (
              <li key={entry.id}>
                {`${entry.id}. ${capitalize(entry.name)} `}
                <Link to={`/pokemon/${entry.id}`}>See details</Link>
              </li>
            ))}
        </ul>
      </Route>
    </div>
  );
};

export default App;
