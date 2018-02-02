import React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./Home";

const PrimaryLayout = () => (
    <div className="container-fluid">
        <main>
            <Route path="/" component={Home}/>
        </main>
    </div>
);

const App = () => (
    <BrowserRouter>
        <PrimaryLayout/>
    </BrowserRouter>
);

Meteor.startup(() => {
    render(<App/>, document.getElementById('render-target'));
});