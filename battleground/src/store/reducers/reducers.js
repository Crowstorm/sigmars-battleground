import { combineReducers } from 'redux';
import battlegroundReducer from './battleground';


export default combineReducers({
    battleground: battlegroundReducer
})