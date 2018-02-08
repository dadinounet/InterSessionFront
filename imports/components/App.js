import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Forms from "./forms/Forms";
import TestConfig from "./forms/TestConfig";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./sidebar/Navbar";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Auth.user.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
);

const Auth = {
    user: {
        isAuthenticated: false,
        token: null,
        email: null,
        history: []
    },
    authenticate() {
        this.user.isAuthenticated = true
        //todo check for a the real json
    },
    signout() {
        this.user.isAuthenticated = false
    }
}

class App extends React.Component {

    state = {
        user : {
            isConnected: true
        }
    };

    render() {
        return (
            <BrowserRouter>
                <main className="container-fluid">
                    <Navbar/>
                    <Sidebar/>
                    <div className="row"/>
                    {/* todo : secure routes */}
                    <div id="main-wrapper" className="row">
                        <Route path="/login" render={() => <Forms userLogin={this.props.userLogin}/>}/>
                        <Route path="/register" render={() => <Forms userRegister={this.props.userRegister}/>}/>
                        <Route path="/password" component={Forms}/>
                        <Route path="/scanner" render={() => <TestConfig submitGithubLink={this.props.submitGithubLink}/>}/>
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
        submitGithubLink: (github) => {
            dispatch({type: 'HTTP_REQUEST_GITHUB', data: github});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);