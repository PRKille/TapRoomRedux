import React from 'react';
import PropTypes from 'prop-types';

const Keg = (props) => {

  function hasInventory(count) {
    return count > 10 ? <button className="purchaseButton" onClick={() => props.onBeerPuchase(props.id)}>Purchase</button>
      : count <= 10 && count > 0 ? <React.Fragment><p>Almost Out!</p><button className="purchaseButton" onClick={() => props.onBeerPuchase(props.id)}>Purchase</button></React.Fragment>
      : <p>Sold Out!</p>;
  }

  return (
    <div className="keg" id={props.id}>
      <h3>{props.brand}:  {props.name}</h3>
      <h4>ABV: {props.abv} Price/Pint: {props.price}</h4>
      {hasInventory(props.inventory)}
      <p>Pints left: {props.inventory}</p>
    </div>
  )
}

Keg.propTypes = {
  id: PropTypes.number,
  inventory: PropTypes.number,
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
}

export default Keg;