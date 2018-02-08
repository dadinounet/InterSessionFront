import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import TestConfig from "./forms/TestConfig";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./sidebar/Navbar";
import Login from "./forms/Login";
import Register from "./forms/Register";
import Logout from "./forms/Logout";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <main className="container-fluid">
                    <Navbar/>
                    <Sidebar/>
                    <div className="row"/>
                    <div id="main-wrapper" className="row">
                        <div className="row align-self-center" id="securityScanner_forms">
                            {/*todo : secure routes*/}
                            <Route path="/" exact component={Login}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/logout" component={Logout}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/scanner" component={TestConfig}/>
                        </div>
                    </div>
                </main>
            </BrowserRouter>);
    }
}

export default App;