const initialState = require('./initialState.js');

import {createStore, combineReducers} from "redux";
import logger from "redux-logger";

// need to import reducers here
const appReducer = require('../reducers/appReducer.js');

export default createStore(
    combineReducers({
        // put imported reducers here
        appReducer
    }),
    initialState
);