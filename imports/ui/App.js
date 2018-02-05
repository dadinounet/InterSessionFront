import React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import Forms from "./Forms";
import Sidebar from "./components/Sidebar";

const App = () => (
    <BrowserRouter>
        <main className="container-fluid">
            <Sidebar/>
            <Route path="/login" component={Forms}/>
            <Route path="/register" component={Forms}/>
            <Route path="/password" component={Forms}/>
        </main>
    </BrowserRouter>
);

Meteor.startup(() => {
    render(<App/>, document.getElementById('render-target'));
});