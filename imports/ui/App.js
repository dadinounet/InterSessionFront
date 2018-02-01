import React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import Forms from './Forms';
import LeftSidebar from "./components/LeftSidebar";

const PrimaryLayout = () => (
    <div className="container">
        <main>
            <Route path="/" exact component={LeftSidebar} />
            <Route path="/login" component={Forms} />
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