import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import rootReducer from "./helpers/reducers";
import thunkMiddleware from 'redux-thunk'



Meteor.startup(() => {
    const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('render-target'));
});

// @todo merge state from parents components to dispatch into children

window.successRequestHandler = (innerText) =>  {
    $('#notification-bar').addClass('alert alert-success').html(innerText).show('slow');
    setTimeout(() => { $('#notification-bar').removeClass('alert alert-success').html('').hide('slow'); }, 3000);
};

window.errorRequestHandler = (innerText) =>  {
    $('#notification-bar').addClass('alert alert-danger').html(innerText).show('slow');
    setTimeout(() => { $('#notification-bar').removeClass('alert alert-danger').html('').hide('slow'); }, 3000);
};

window.storeUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
};

window.retrieveStoredUser = () => localStorage.getItem('user');