import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';

// App component - represents the whole app
export default class App extends Component {
    render() {
        return (
            <div className="container">
            <h1>Security Scanner</h1>
                <BrowserRouter>
                     <Switch>
                         <Route exact path="/" component={Home}/>
                     </Switch>
                 </BrowserRouter>
            </div>
        );
    }
}