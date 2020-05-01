import kegToggleReducer from '../../reducers/keg-toggle-reducer';
import * as c from '../../actions/ActionTypes';

describe('kegToggleReducer', () => {
  test('Should return default state if no action type is passed to reducer', () => {
    expect(kegToggleReducer({}, {type:null})).toEqual({});
  });

  test('Should toggle form visibility state to true', () => {
    expect(kegToggleReducer(true, { type: c.TOGGLE_DETAIL })).toEqual(false);
  });
});