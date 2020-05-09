import {combineReducers} from 'redux';
import machineReducer from './vendingmachine/vendingmachine.reducer';
export default combineReducers({
    machine:machineReducer,

});