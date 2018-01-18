import React, { Component } from 'react';
import {render} from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';

Meteor.startup(() => {
    render(
        <div className="container">
            <h1>Security Scanner</h1>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                </Switch>
            </BrowserRouter>
        </div>,
        document.getElementById('render-target'));
});