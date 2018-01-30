import React, { Component } from 'react';
import {render} from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Inscription from './Inscription';
import Password from './Password';

Meteor.startup(() => {
    render(
        <div className="container">
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Inscription}/>
                </Switch>
            </BrowserRouter>
        </div>,
        document.getElementById('render-target'));
});