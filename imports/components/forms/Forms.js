import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Password from './Password';

class Forms extends Component {

    constructor(props) {
        super(props);
    }

    showLoginInfo() {
        $('.b-form').css("opacity", "0.01");
        $('.box-form').css("left", "-37%");
        $('.box-info').css("right", "-37%");
    }

    hideLoginInfo() {
        $('.b-form').css("opacity", "1");
        $('.box-form').css("left", "0px");
        $('.box-info').css("right", "-5px");
    }

    render() {
        return (
            <div id="securityScanner_forms">
                <Route path="/login" render={() => <Login showLoginInfo={this.showLoginInfo} hideLoginInfo={this.hideLoginInfo}/>}/>
                <Route path="/register" render={() => <Register showLoginInfo={this.showLoginInfo} hideLoginInfo={this.hideLoginInfo}/>}/>
                <Route path="/password" render={() => <Password showLoginInfo={this.showLoginInfo} hideLoginInfo={this.hideLoginInfo}/>}/>
            </div>
        );
    }
}

export default Forms;