import pokemonReducer from '../../redux/reducers/pokemon';

describe('pokemon reducer', () => {
  it('it returns the action payload if action type is GET_POKEMON', () => {
    const state = '';
    const action = {
      type: 'GET_POKEMON',
      payload: 'something',
    };

    expect(pokemonReducer(state, action)).toEqual('something');
  });

  it('it returns the same state if action type is not GET_POKEMON', () => {
    const state = 'old state';
    const action = {
      type: 'SOME_OTHER_ACTION',
      payload: 'something',
    };

    expect(pokemonReducer(state, action)).toEqual('old state');
  });
});
