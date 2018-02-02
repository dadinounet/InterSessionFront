import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='box'>
                <div className='box-form'>
                    <div className='box-login-title'>
                        <div className='i i-login'/>
                        <h2>LOGIN</h2>
                    </div>
                    <div className='box-login'>
                        <div className='fieldset-body' id='login_form'>
                            <button onClick={this.props.showLoginInfo} className='b b-form i i-more'/>
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
                <div className='box-info'>
                    <p>
                        <button onClick={this.props.hideLoginInfo} className='b b-info i i-left' title='Back to Register'/>
                        <span>Need Help?</span>
                    </p>
                    <div className='line-wh'/>
                    <Link to={`/login`}>
                        <button className='b-support btn btn-defaut' title='Already registered ?'>Already registered ?</button>
                    </Link>
                    <div className='line-wh'/>
                </div>
            </div>
        );
    }
}

export default Register;