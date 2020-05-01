import tapControlReducer from '../../reducers/tap-control-reducer';

let action;
let tapList = {
  name: "Ranier",
  brand: "Ranier",
  price: "$3",
  abv: "4.6%",
  inventory: 89,
  id: 1
};

describe('tapControlReducer', () => {
  test('Should return default state if no action type is passed to reducer', () => {
    expect(tapControlReducer({}, {type:null})).toEqual({});
  })

  test('Should add new keg to tapList', () => {
    const {name,brand,price,abv,inventory,id} = tapList;
    action = {
      type: 'ADD_KEG',
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
});