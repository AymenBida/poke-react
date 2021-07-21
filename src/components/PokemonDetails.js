import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { findPokemon } from '../api';
import { seeDetails } from '../redux/actions';
import { capitalize } from '../utilities';

const PokemonDetails = () => {
  const { id } = useParams();

  const currentPokemon = useSelector((state) => state.currentPokemon);
  const dispatch = useDispatch();

  const fetchPokemon = async (id) => {
    const response = await findPokemon(id);
    dispatch(seeDetails(response));
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  if (currentPokemon.name === undefined) {
    return (
      <p>loading...</p>
    );
  }

  return (
    <div>
      <h2>{capitalize(currentPokemon.name)}</h2>
      <img src={currentPokemon.image} alt="" />
      <h3>{`Type 1: ${capitalize(currentPokemon.type1)}`}</h3>
      <h3>{`Type 2: ${(currentPokemon.type2 !== null) ? capitalize(currentPokemon.type2) : 'none'}`}</h3>
    </div>
  );
};

export default PokemonDetails;
