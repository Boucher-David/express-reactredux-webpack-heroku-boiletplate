import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";

import store from "./store/store.js";

store.subscribe(() => {
    console.log('Store updated:', store.getState());
});

const app = require('./components/app.js');

// remember to add components between provider
render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app'));