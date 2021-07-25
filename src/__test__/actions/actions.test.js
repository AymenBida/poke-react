import { filterName, getPokemon, seeDetails } from '../../redux/actions/index';

describe('get pokemon', () => {
  it('it sets the state of the pokemon reducer to the given response', () => {
    const response = [
      {
        id: 1,
        name: 'charmander',
        url: 'www.charmander.com',
      },
      {
        id: 2,
        name: 'charizard',
        url: 'www.charizard.com',
      },
    ];

    const expectedObject = {
      type: 'GET_POKEMON',
      payload: response,
    };

    expect(getPokemon(response)).toEqual(expectedObject);
  });
});

describe('see details', () => {
  it('it parses the data from the response to a given schema', () => {
    const response = {
      data: {
        id: '2',
        name: 'ivysaur',
        sprites: {
          front_default: 'www.pokeapi.com/pokemon/ivysaur/image.png',
        },
        types: [
          {
            type: {
              name: 'grass',
            },
          },
          {
            type: {
              name: 'poison',
            },
          },
        ],
        stats: [
          {
            base_stat: '30',
          },
          {
            base_stat: '75',
          },
          {
            base_stat: '35',
          },
          {
            base_stat: '42',
          },
          {
            base_stat: '62',
          },
          {
            base_stat: '25',
          },
        ],
      },
    };

    const expectedObject = {
      type: 'SEE_DETAILS',
      payload: {
        id: '2',
        name: 'ivysaur',
        image: 'www.pokeapi.com/pokemon/ivysaur/image.png',
        type1: 'grass',
        type2: 'poison',
        stats: {
          hp: '30',
          attack: '75',
          defense: '35',
          spAttack: '42',
          spDefense: '62',
          speed: '25',
        },
      },
    };

    expect(seeDetails(response)).toEqual(expectedObject);
  });

  it('it puts type2 to null if there is only one type', () => {
    const response = {
      data: {
        id: '4',
        name: 'charmander',
        sprites: {
          front_default: 'www.pokeapi.com/pokemon/charmander/image.png',
        },
        types: [
          {
            type: {
              name: 'fire',
            },
          },
        ],
        stats: [
          {
            base_stat: '30',
          },
          {
            base_stat: '75',
          },
          {
            base_stat: '35',
          },
          {
            base_stat: '42',
          },
          {
            base_stat: '62',
          },
          {
            base_stat: '25',
          },
        ],
      },
    };

    const expectedObject = {
      type: 'SEE_DETAILS',
      payload: {
        id: '4',
        name: 'charmander',
        image: 'www.pokeapi.com/pokemon/charmander/image.png',
        type1: 'fire',
        type2: null,
        stats: {
          hp: '30',
          attack: '75',
          defense: '35',
          spAttack: '42',
          spDefense: '62',
          speed: '25',
        },
      },
    };

    expect(seeDetails(response)).toEqual(expectedObject);
  });
});

describe('filterName', () => {
  it('it sets the state of the filter reducer to the given response', () => {
    const response = {
      value: 'written Text',
    };

    const expectedObject = {
      type: 'FILTER_NAME',
      payload: 'written Text',
    };

    expect(filterName(response)).toEqual(expectedObject);
  });
});
