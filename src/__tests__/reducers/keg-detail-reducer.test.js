import kegDetailReducer from '../../reducers/keg-detail-reducer';
import * as c from './../../actions/ActionTypes';

describe('kegDetailReducer', () => {

  let action;
  let selectedKeg = {
    name: "Ranier",
    brand: "Ranier",
    price: "$3",
    abv: "4.6%",
    inventory: 89,
    id: 1
  };
  
  test('Should return default state if no action type is passed to reducer', () => {
    expect(kegDetailReducer({}, {type:null})).toEqual({});
  });

  test('Should assign currently selected keg', () => {
    const {name,brand,price,abv,inventory,id} = selectedKeg;
    action = {
      type: c.KEG_DETAIL,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      inventory: inventory,
      id: id
    };

    expect(kegDetailReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        inventory: inventory,
        id: id
      }
    });
  });
});