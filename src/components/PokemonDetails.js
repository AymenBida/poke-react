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
    <div className="row w-75 m-auto mt-5 gx-3 d-flex justify-content-between">
      <div className="col-4 border border-dark rounded p-3 d-flex flex-column align-items-center justify-content-around">
        <h2 className="text-center">{`${currentPokemon.id}. ${capitalize(currentPokemon.name)}`}</h2>
        <img className="w-75 text-center" src={currentPokemon.image} alt="" />
      </div>
      <div className="col-8 row border border-dark rounded px-3 py-5 d-flex">
        <div className="col-4">
          <h3>Type 1:</h3>
          <p className="h4 mb-4">{capitalize(currentPokemon.type1)}</p>
          <h3>Type 2:</h3>
          <p className="h4">{(currentPokemon.type2 !== null) ? capitalize(currentPokemon.type2) : 'none'}</p>
        </div>
        <div className="d-flex flex-column col-8">
          <h3 className="mb-3 ">Stats:</h3>
          <div className="d-flex flex-wrap">
            {Object.entries(currentPokemon.stats).map((stat) => (
              <p className="w-50 h5 mb-3" key={stat[0]}>
                {`${capitalize(stat[0])}: `}
                <span className="h4">{stat[1]}</span>
              </p>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default PokemonDetails;
