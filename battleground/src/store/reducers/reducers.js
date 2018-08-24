import { combineReducers } from 'redux';
import battlegroundReducer from './battleground';
import diceReducer from './dice';


export default combineReducers({
    battleground: battlegroundReducer,
    dice: diceReducer
})