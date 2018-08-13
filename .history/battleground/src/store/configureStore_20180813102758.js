import { createStore,  applyMiddleware, compose } from 'redux';
// import ReduxPromise from 'redux-promise'
// import thunk from 'redux-thunk'

import battlegroundReducer from './reducers/battleground';


const rootReducer = combineReducers({
    battleground: battlegroundReducer
});

let composeEnhancers = compose;

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () =>{
    return createStore(rootReducer, composeEnhancers());

}

export default configureStore;