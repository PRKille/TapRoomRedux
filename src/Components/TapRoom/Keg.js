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
      <h3>{props.name}</h3>
      <h4>ABV: {props.abv} Price/Pint: {props.price}</h4>
      <h4>Pints Remaining: {props.inventory}</h4>
      {hasInventory(props.inventory)}
      <button className="purchaseButton" onClick={() => props.onKegClick(props.id)}>Beer Details</button>
    </div>
  )
}

Keg.propTypes = {
  id: PropTypes.string,
  inventory: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  onKegClick: PropTypes.func,
  onBeerPuchase: PropTypes.func
}

export default Keg;