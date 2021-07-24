import './styles/App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { Link, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { getPokemon } from '../redux/actions';
import { capitalize, numeratePokemon } from '../utilities';
import { callPokemonAPI } from '../api';
import Filter from './Filter';

const App = () => {
  const { path } = useRouteMatch();

  const pokemonList = useSelector((state) => state.pokemon);
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const filteredList = pokemonList.filter((element) => element.name.match(new RegExp(filterValue, 'gi')));

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
        <ul className="d-flex justify-content-between flex-wrap mt-4">
          {filteredList
            .map((entry) => (
              <div className="text-dark w-25 p-3" key={entry.id}>
                <li className="">
                  <Link className="pokemonLink" to={`/pokemon/${entry.id}`}>
                    <span className="h3">{entry.id}</span>
                    <span className="h5">{`. ${capitalize(entry.name)} `}</span>
                    <FontAwesomeIcon icon={faEye} className="icon" size="20x" />
                  </Link>
                </li>
              </div>
            ))}
          <div className="w-25 p-3" />
        </ul>
      </Route>
    </div>
  );
};

export default App;
