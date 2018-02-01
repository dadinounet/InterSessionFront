import React, { Component } from 'react';

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

                    </div>
                </div>
                <div className='box-info'>
                    <p>
                        <button onClick="hideLoginInfo()" className='b b-info i i-left' title='Back to Register' />

                        <span>Need Help?</span>
                    </p>
                    <div className='line-wh'/>

                    <div className='line-wh'/>
                </div>
            </div>
        );
    }
}

export default Register;