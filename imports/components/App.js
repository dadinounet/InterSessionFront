import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Forms from "./forms/Forms";
import TestConfig from "./forms/TestConfig";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./sidebar/Navbar";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <main className="container-fluid">
                    <Navbar/>
                    <Sidebar/>
                    <div className="row"/>
                    <div id="main-wrapper" className="row">
                        <Route path="/login" render={() => <Forms userLogin={this.props.userLogin}/>}/>
                        <Route path="/register" component={Forms}/>
                        <Route path="/password" component={Forms}/>
                        <Route path="/scanner" component={TestConfig}/>
                    </div>
                </main>
            </BrowserRouter>);
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (user) => {
            dispatch({type: 'HTTP_REQUEST_USER_LOGIN', data: user});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);