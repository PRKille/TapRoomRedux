import React from 'react';
import '../App.css';
import Header from './Header';
import TapRoom from './TapRoom/TapRoom';
import KegDetails from './KegDetails/KegDetails';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTapRoom: true,
      tapList: [
        {
          name: "Ranier",
          brand: "Ranier",
          price: "$3",
          abv: "4.6%",
          inventory: 89,
          id: 1
        },
        {
          name: "Old Rasputin Russian Imperial Stout",
          brand: "North Coast Brewing Co",
          price: "$6",
          abv: "9.0%",
          inventory: 24,
          id: 2
        },
        {
          name: "ESB English Ale",
          brand: "Ferment",
          price: "$6",
          abv: "5.4",
          inventory: 12,
          id: 3
        }
      ],
      selectedKeg: {},
    }
  }

  currentPage = () => {
    if (this.state.showTapRoom) {
      return {
        component:<TapRoom
          tapList={this.state.tapList}
          onKegSelection={this.handleKegSelection}
          onNewKegPurchase={this.handleNewKegPurchase}
          onPintSold={this.handlePintPurchase}
        />
      }
    } else {
      return{
        component:<KegDetails
          keg={this.state.selectedKeg}
          handleBackToTapRoom={this.handleBackToTapRoom} />
      }
    }
  }

  handlePintPurchase = (id) => {
    const selectedKeg = this.state.tapList.filter(keg => keg.id === id)[0];
    const newInventory = selectedKeg.inventory-1;
    const updatedKeg = {...selectedKeg, inventory: newInventory};
    const otherKegs = this.state.tapList.filter(keg => keg.id != id);
    this.setState({
      tapList: [...otherKegs, updatedKeg]
    });
  }

  handleNewKegPurchase = (newKeg) => {
    const newTapList = this.state.tapList.concat(newKeg);
    this.setState({tapList: newTapList});
  }

  handleKegSelection = (id) => {
    const selectedKeg = this.state.tapList.filter(keg => keg.id ===id)[0];
    this.setState({
      selectedKeg: selectedKeg,
      showTapRoom: false
    });
  }

  handleBackToTapRoom = () => {
    this.setState({
      showTapRoom: true
    });
  }

  render() {
    let currentPage = this.currentPage();
    return (
      <React.Fragment>
        <Header />
        <p>Under Construction</p>
        {currentPage.component}
      </React.Fragment>
    );
  }
}

export default App;
