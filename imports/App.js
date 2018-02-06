import React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import Forms from "./components/forms/Forms";
import TestConfig from "./components/forms/TestConfig";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/sidebar/Navbar";

const App = () => (
    <BrowserRouter>
        <main className="container-fluid">
            <Navbar></Navbar>
            <Sidebar/>
            <div className="row"></div>
            <div id="main-wrapper" className="row">
                <Route path="/login" component={Forms}/>
                <Route path="/register" component={Forms}/>
                <Route path="/password" component={Forms}/>
                <Route path="/scanner" component={TestConfig}/>
            </div>
        </main>
    </BrowserRouter>
);

Meteor.startup(() => {
    render(<App/>, document.getElementById('render-target'));
});