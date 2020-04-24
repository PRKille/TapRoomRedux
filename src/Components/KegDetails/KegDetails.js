import React from 'react';
import PropTypes from 'prop-types';

const KegDetails = (props) => {
  return (
    <div>
      <h1>{props.keg.name}</h1>
      <h3>{props.keg.brand}</h3>
      <p>ABV: {props.keg.abv}  Pints Left: {props.keg.inventory}</p>
      <button onClick={props.handleBackToTapRoom}>Back to Tap Room</button>
    </div>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  handleBackToTapRoom: PropTypes.func
}

export default KegDetails;