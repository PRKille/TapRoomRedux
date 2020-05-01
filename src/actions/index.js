import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELET_KEG,
  id
});

export const toggleDetail = () => ({
  type: c.TOGGLE_DETAIL
});

export const addKeg = (keg) => {
  const { name, brand, price, abv, inventory, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    inventory: inventory,
    id: id
  }
};