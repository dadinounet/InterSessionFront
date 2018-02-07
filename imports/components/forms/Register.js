import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Register extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        email: '',
        password: '',
        passwordRepeat: '',
        registerError: null,
        isRegistered: false
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.userRegister(this.state);
    };

    render() {
        if (this.state.isRegistered === true) {
            return <Redirect to='/'/>
        }
        return (
            <div className="col-sm-4 offset-md-4 vcenter">
                <div className='box'>
                    <div className='box-form'>
                        <div className='box-login-title'>
                        </div>
                        <div className='box-login'>
                            <div className='fieldset-body' id='login_form'>
                                <form onSubmit={this.handleSubmit}>
                                    <br/>
                                    <p className='field'>
                                        <label htmlFor="email" onChange={(event) => {
                                            this.setState({email: event.target.value})
                                        }}>EMAIL</label>
                                        <input type='text' id='email' name='email'/>
                                        <span id='valida' className='i i-warning'/>
                                    </p>
                                    <p className='field'>
                                        <label htmlFor="pass" onChange={(event) => {
                                            this.setState({password: event.target.value})
                                        }}>PASSWORD</label>
                                        <input type='password' id='pass' name='pass'/>
                                        <span id='valida' className='i i-close'/>
                                    </p>
                                    <p className='field'>
                                        <label htmlFor="pass" onChange={(event) => {
                                            this.setState({passwordRepeat: event.target.value})
                                        }}>CONFIRM PASSWORD</label>
                                        <input type='password' id='passRepeat' name='passRepeat'/>
                                        <span id='valida' className='i i-close'/>
                                    </p>
                                    <p>
                                        <input type='submit' id='do_create' value='CREATE ACCOUNT'/>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;