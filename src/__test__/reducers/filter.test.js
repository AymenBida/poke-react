import filter from '../../redux/reducers/filter';

describe('filter reducer', () => {
  it('it returns the action payload if action type is FILTER_NAME', () => {
    const state = '';
    const action = {
      type: 'FILTER_NAME',
      payload: 'something',
    };

    expect(filter(state, action)).toEqual('something');
  });

  it('it returns the same state if action type is not FILTER_NAME', () => {
    const state = 'old state';
    const action = {
      type: 'SOME_OTHER_ACTION',
      payload: 'something',
    };

    expect(filter(state, action)).toEqual('old state');
  });
});
