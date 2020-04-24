import React from 'react';
import Keg from './Keg';
import KegForm from '../KegFolder/KegForm'
import PropTypes from "prop-types";
import './TapRoom.css'
import '../../App.css'
import { v4 } from 'uuid';

function TapRoom(props){

  function handleKegPurchaseSubmit(event) {
    event.preventDefault();
    props.onNewKegPurchase({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      abv: event.target.abv.value,
      inventory: 124,
      id: v4()});
  }

  let sortList = props.tapList.sort((a,b) =>{
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA < nameB ? -1 : 1;
  });
  
  return (
    <React.Fragment>
      <div className="kegs">
        {sortList.map((keg) => (
          <div>
            <hr />
            <Keg
              key={keg.id}
              name={keg.name}
              brand={keg.brand}
              price={keg.price}
              abv={keg.abv}
              inventory={keg.inventory}
              id={keg.id}
              onKegClick={props.onKegSelection}
              onBeerPuchase={props.onPintSold} />
          </div>
        ))}
      </div>
      <hr />
      <div className="form">
        <h3>Buy a new Keg: </h3>
        <KegForm 
        formSubmissionHandler={handleKegPurchaseSubmit}
        buttonText="Purchase Keg" />
      </div>
    </React.Fragment>
  )
}

TapRoom.propTypes = {
  tapList: PropTypes.arrayOf(PropTypes.object),
  onNewKegPurchase: PropTypes.func,
  onKegSelection: PropTypes.func
}

export default TapRoom;