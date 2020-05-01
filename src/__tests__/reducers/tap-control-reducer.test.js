import tapControlReducer from '../../reducers/tap-control-reducer';
import * as c from './../../actions/ActionTypes';

let action;
let tapList = {
  name: "Ranier",
  brand: "Ranier",
  price: "$3",
  abv: "4.6%",
  inventory: 89,
  id: 1
};

let emptyTaps = {
  1: {
    name: "Ranier",
    brand: "Ranier",
    price: "$3",
    abv: "4.6%",
    inventory: 0,
    id: 1
  },
  2: {
    name: "Old Rasputin Russian Imperial Stout",
    brand: "North Coast Brewing Co",
    price: "$6",
    abv: "9.0%",
    inventory: 24,
    id: 2
  }
}

describe('tapControlReducer', () => {
  test('Should return default state if no action type is passed to reducer', () => {
    expect(tapControlReducer({}, {type:null})).toEqual({});
  });

  test('Should add new keg to tapList', () => {
    const {name,brand,price,abv,inventory,id} = tapList;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      inventory: inventory,
      id: id
    };

    expect(tapControlReducer({}, action)).toEqual({
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

  test('Should delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };

    expect(tapControlReducer(emptyTaps, action)).toEqual({
      2: {
        name: "Old Rasputin Russian Imperial Stout",
        brand: "North Coast Brewing Co",
        price: "$6",
        abv: "9.0%",
        inventory: 24,
        id: 2
      }
    });
  });
});