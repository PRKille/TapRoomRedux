import React from 'react';
import KegForm from '../KegFolder/KegForm'
import PropTypes from 'prop-types';
import '../../App.css'

const KegDetails = (props) => {

  function handleKegEditSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value ? event.target.name.value : props.keg.name;
    const brand = event.target.brand.value ? event.target.brand.value : props.keg.brand;
    const price = event.target.price.value ? event.target.price.value : props.keg.price;
    const abv = event.target.abv.value ? event.target.abv.value : props.keg.abv;
    props.onKegEdit({
      name: name, 
      brand:brand, 
      price: price, 
      abv: abv,
      inventory: props.keg.inventory,
      id: props.keg.id});
  }

  return (
    <div className="form">
      <h1>{props.keg.name}</h1>
      <h3>{props.keg.brand}</h3>
      <p>ABV: {props.keg.abv}  Pints Left: {props.keg.inventory}</p>
      <button className="detailsButton" onClick={() => props.onKegDeletion(props.keg.id)}>Delete Keg</button>
      <button className="detailsButton" onClick={props.handleBackToTapRoom}>Back to Tap Room</button>
      <div className="form">
        <KegForm
          formSubmissionHandler={handleKegEditSubmit}
          buttonText="Edit this Keg" />
      </div>
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