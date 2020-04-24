import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function TapRoom(props){

  function handleKegPurchaseSubmit(event) {
    event.preventDefault();
    props.onNewKegPurchase({
      image: event.target.albumImg.value, 
      title: event.target.albumName.value, 
      artist: event.target.artistName.value, 
      description: event.target.description.value,
      id: v4()});
  }

  
  return (
    <React.Fragment>
      <div className="kegs">
        {props.tapList.map((keg) => (
          <React.Fragment>
            <hr />
            <Keg
              key={keg.id}
              name={keg.name}
              brand={keg.brand}
              price={keg.price}
              abv={keg.abv}
              inventory={124}
              id={keg.id} />
          </React.Fragment>
        ))}
      </div>
      
      <form className="createForm" onSubmit={handleKegPurchaseSubmit}>
        <h3>Buy a new Keg</h3>
        <input
          type="text"
          name="name"
          placeholder="Beer Name" />
        <input
          type="text"
          name="brand"
          placeholder="Brewery" />
        <input
          type="text"
          name="price"
          placeholder="Price per Pint" />
        <input
          type="text"
          name="abv"
          placeholder="ABV" />
          
        <button type='submit'>Buy Keg</button>
      </form>
    </React.Fragment>
  )
}

TapRoom.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object),
  onNewKegPurchase: PropTypes.func,
  onAlbumSelection: PropTypes.func
}

export default TapRoom;