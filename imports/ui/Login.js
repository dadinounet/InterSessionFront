import React, {Component} from 'react';
import Checkbox from "./components/Checkbox";
import {Link} from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='box'>
                <div className='box-form'>
                    <div className='box-login'>
                        <div className='fieldset-body' id='login_form'>
                            <button onClick={this.props.showLoginInfo} className='b b-form i i-more' title='More informations'/>
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
                            <Checkbox label="Remember me"/>
                            <p>
                                <input type='submit' id='do_login' value='GET STARTED'/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='box-info'>
                    <p>
                        <button onClick={this.props.hideLoginInfo} className='b b-info i i-left' title='Back to Sign In'/>
                        <span>Need Help?</span>
                    </p>
                    <div className='line-wh'/>
                    <Link to={`/password`}><button className='b-support btn btn-defaut' title='Forgot Password?'>Forgot Password ?</button></Link>
                    <Link to={`/register`}>
                        <button className='b-support btn btn-defaut' title='Create account'>Create account</button>
                    </Link>
                    <div className='line-wh'/>
                    {/*<button className='b-cta' title='Sign up now!'>CREATE ACCOUNT</button>*/}
                </div>
            </div>
        );
    }
}

export default Login;