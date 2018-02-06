import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-4 offset-md-4 vcenter">
            <div className='box'>
                <div className='box-form'>
                    <div className='box-login-title'>
                    </div>
                    <div className='box-login'>
                        <div className='fieldset-body' id='login_form'>
                            <br/>
                            <p className='field'>
                                <label htmlFor="user">EMAIL</label>
                                <input type='text' id='email' name='email'/>
                                <span id='valida' className='i i-warning'/>
                            </p>
                            <p className='field'>
                                <label htmlFor="pass">PASSWORD</label>
                                <input type='password' id='pass' name='pass'/>
                                <span id='valida' className='i i-close'/>
                            </p>
                            <p className='field'>
                                <label htmlFor="pass">CONFIRM PASSWORD</label>
                                <input type='password' id='passRepeat' name='passRepeat'/>
                                <span id='valida' className='i i-close'/>
                            </p>
                            <p>
                                <input type='submit' id='do_create' value='CREATE ACCOUNT'/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Register;