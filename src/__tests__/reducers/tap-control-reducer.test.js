import tapControlReducer from '../../reducers/tap-control-reducer';

describe('tapControlReducer', () => {
  test('Should return default state if no action type is passed to reducer', () => {
    expect(tapControlReducer({}, {type:null})).toEqual({});
  })
})