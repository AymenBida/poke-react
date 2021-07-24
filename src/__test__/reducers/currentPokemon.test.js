import currentPokemon from '../../redux/reducers/currentPokemon';

describe('currentPokemon reducer', () => {
  it('it returns the action payload if action type is SEE_DETAILS', () => {
    const state = '';
    const action = {
      type: 'SEE_DETAILS',
      payload: 'something',
    };

    expect(currentPokemon(state, action)).toEqual('something');
  });

  it('it returns the same state if action type is not SEE_DETAILS', () => {
    const state = 'old state';
    const action = {
      type: 'SOME_OTHER_ACTION',
      payload: 'something',
    };

    expect(currentPokemon(state, action)).toEqual('old state');
  });
});
