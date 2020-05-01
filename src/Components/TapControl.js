import React from 'react';
import '../App.css';
import TapRoom from './TapRoom/TapRoom';
import KegDetails from './KegDetails/KegDetails';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class TapControl extends React.Component {

  currentPage = () => {
    if (this.props.showTapRoom) {
      return {
        component:<TapRoom
          tapList={this.props.tapList}
          onKegSelection={this.handleKegSelection}
          onNewKegPurchase={this.handleNewKegPurchase}
          onPintSold={this.handlePintPurchase}
        />
      }
    } else {
      return{
        component:<KegDetails
          keg={this.props.selectedKeg}
          handleBackToTapRoom={this.handleBackToTapRoom}
          onKegDeletion={this.handleKegDelete}
          onKegEdit={this.handleKegEdit} />
      }
    }
  }

  handleKegEdit= (newKeg) => {
    const {dispatch} = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleDetail();
    dispatch(action2);
  }

  handleKegDelete = (id) => {
    const {dispatch} = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.toggleDetail();
    dispatch(action2);
  }

  handlePintPurchase = (id) => {
    const selectedKeg = this.props.tapList[id];
    const newInventory = selectedKeg.inventory-1;
    const updatedKeg = {...selectedKeg, inventory: newInventory};
    const {dispatch} = this.props;
    const action = a.addKeg(updatedKeg);
    dispatch(action);
  }

  handleNewKegPurchase = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
  }

  handleKegSelection = (id) => {
    const selectedKeg = this.props.tapList[id];
    const {dispatch} = this.props;
    const action = a.kegDetail(selectedKeg);
    dispatch(action);
    const action2 = a.toggleDetail();
    dispatch(action2);
  }

  handleBackToTapRoom = () => {
    const {dispatch} = this.props;
    const action = a.toggleDetail();
    dispatch(action);
  }

  render() {
    let currentPage = this.currentPage();
    return (
      <React.Fragment>
        {currentPage.component}
      </React.Fragment>
    );
  }
}

TapControl.propTypes = {
  tapList: PropTypes.object,
  showTapRoom: PropTypes.bool,
  selectedKeg: PropTypes.object
}

const mapStateToProps = state => {
  return {
    tapList: state.tapList,
    showTapRoom: state.showTapRoom,
    selectedKeg: state.selectedKeg
  }
}

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;