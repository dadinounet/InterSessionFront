import React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import Sidebar from "./components/sidebar/Sidebar";
import Forms from "./components/forms/Forms";
import MainWrapper from "./components/content/MainWrapper";

const App = () => (
    <BrowserRouter>
        <main className="container-fluid">
            <Sidebar/>
            <Route path="/login" component={Forms}/>
            <Route path="/register" component={Forms}/>
            <Route path="/password" component={Forms}/>
            <MainWrapper/>
        </main>
    </BrowserRouter>
);

Meteor.startup(() => {
    render(<App/>, document.getElementById('render-target'));
});