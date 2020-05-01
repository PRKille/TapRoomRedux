import kegDetailReducer from '../../reducers/keg-detail-reducer';
import * as c from './../../actions/ActionTypes';

describe('kegDetailReducer', () => {
  test('Should return default state if no action type is passed to reducer', () => {
    expect(kegDetailReducer({}, {type:null})).toEqual({});
  });

  test('Should toggle form visibility state to true', () => {
    expect(kegDetailReducer(true, { type: c.TOGGLE_DETAIL })).toEqual(false);
  });
});