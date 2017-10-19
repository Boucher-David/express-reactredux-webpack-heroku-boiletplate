const initialState = require('./initialState.js');

import {createStore} from "redux";
import { combineReducers } from 'redux';
import appReducer from '../reducers/appReducer.js'

// need to import reducers here

const combinedReducers = combineReducers({
    appReducer: appReducer
});
export default createStore(
    combinedReducers,
    initialState
);