import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const {name, brand, price, abv, inventory, id} = action;
  switch(action.type) {
    case c.KEG_DETAIL:
      return Object.assign({}, state, {
          name: name,
          brand: brand,
          price: price,
          abv: abv,
          inventory: inventory,
          id: id
      });
    default:
      return state;
  }
}