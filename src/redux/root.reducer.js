import {combineReducers} from 'redux';
import machineReducer from './v_machine/v_machine.reducer';
export default combineReducers({
    machine:machineReducer,

});