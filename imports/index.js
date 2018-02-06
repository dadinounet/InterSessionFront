import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import usersReducer from "./helpers/usersReducer";
import apiMiddleware from "./middlewares/apiMiddleware";
import App from './components/App';

const reducers = combineReducers({users: usersReducer});
const store = createStore(reducers, applyMiddleware(apiMiddleware));

Meteor.startup(() => {
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('render-target'));
});