import kegDetailReducer from './keg-detail-reducer';
import tapControlReducer from './tap-control-reducer';
import kegToggleReducer from './keg-toggle-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tapList: tapControlReducer,
  showTapRoom: kegToggleReducer,
  selectedKeg: kegDetailReducer
});

export default rootReducer;