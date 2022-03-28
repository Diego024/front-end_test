import React from "react";
import ReactDOM from "react-dom";
// REACT REDUX
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
 import reducer from './reducers/'
// ROUTES
import App from './routes/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    news: [],
    savedNews: JSON.parse(window.localStorage.getItem("savedNews")),
    filter: window.localStorage.getItem('filter'),
    currentOption: "all"
}

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)