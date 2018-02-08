import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {connectUser} from "../../helpers/UserLoginActions";

class Login extends Component {

    state = {
        email: '',
        password: '',
        rememberMe: true,
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.userLogin(this.state);
    };

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.user.isAuthenticated === true) {
              return <Redirect to='/scanner'/>
        }
        return (
            <div id="login-container" className={`box col-sm-4 vcenter ${this.props.user.isAuthenticated ? 'offset-sm-4' : 'offset-sm-9'}`}>
                <div id="login-box" className='box-form'>
                    <div className='box-login' >
                        <div className='fieldset-body' id='login_form'>
                            <form onSubmit={this.handleSubmit}>
                                <br/>
                                <p className='field'>
                                    <label htmlFor="user">EMAIL</label>
                                    <input type='text' id='email' name='email' value={this.state.email}
                                           onChange={(event) => {
                                               this.setState({email: event.target.value})
                                           }}/>
                                    <span id='valida' className='i i-warning'/>
                                </p>
                                <p className='field'>
                                    <label htmlFor="pass">PASSWORD</label>
                                    <input type='password' id='pass' name='pass' value={this.state.password}
                                           onChange={(event) => {
                                               this.setState({password: event.target.value})
                                           }}/>
                                    <span id='valida' className='i i-close'/>
                                </p>
                                <input type="checkbox" name="rememberMe" className="checkbox" onChange={(event) => {
                                    this.setState({rememberMe: !!event.target.checked})
                                }} checked={this.state.rememberMe ? "checked" : ""}/> Remember me
                                <p>
                                    <input type='submit' id='do_login' value='GET STARTED'/>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (userForm) => {
            dispatch(connectUser(userForm));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);