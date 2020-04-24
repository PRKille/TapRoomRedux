import React from 'react';
import KegForm from '../KegFolder/KegForm'
import PropTypes from 'prop-types';

const KegDetails = (props) => {

  function handleKegEditSubmit(event) {
    event.preventDefault();
    props.onKegEdit({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      abv: event.target.abv.value,
      inventory: props.keg.inventory,
      id: props.keg.id});
  }

  return (
    <div>
      <h1>{props.keg.name}</h1>
      <h3>{props.keg.brand}</h3>
      <p>ABV: {props.keg.abv}  Pints Left: {props.keg.inventory}</p>
      <button onClick={() => props.onKegDeletion(props.keg.id)}>Delete Keg</button>
      <button onClick={props.handleBackToTapRoom}>Back to Tap Room</button>
      <KegForm
        formSubmissionHandler={handleKegEditSubmit}
        buttonText="Edit this Keg" />
    </div>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  handleBackToTapRoom: PropTypes.func,
  onKegDeletion: PropTypes.func,
  onKegEdit: PropTypes.func
}

export default KegDetails;