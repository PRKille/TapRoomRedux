import kegDetailReducer from './keg-detail-reducer';
import tapControlReducer from './tap-control-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tapList: tapControlReducer,
  showTapRoom: kegDetailReducer
});

export default rootReducer;