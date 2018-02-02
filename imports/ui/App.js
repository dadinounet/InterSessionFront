import React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import Forms from './Forms';
import Sidebar from "./components/Sidebar";

const PrimaryLayout = () => (
    <div className="container-fluid">
        <main>
            <Route path="/" exact component={Sidebar} />
            <Route path="/login" component={Forms} />
            <Route path="/register" component={Forms}/>
            <Route path="/password" component={Forms}/>
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