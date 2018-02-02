import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Forms from "./Forms";

class Home extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <Route path="/login" component={Forms}/>
                <Route path="/register" component={Forms}/>
                <Route path="/password" component={Forms}/>
            </div>
        );
    }
}

export default Home;