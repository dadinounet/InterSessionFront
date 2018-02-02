import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'username': '',
            'password': ''
        }
    }

    showLoginInfo() {
        $('.b-form').css("opacity","0.01");
        $('.box-form').css("left","-37%");
        $('.box-info').css("right","-37%");
    }
    hideLoginInfo() {
        $('.b-form').css("opacity","1");
        $('.box-form').css("left","0px");
        $('.box-info').css("right","-5px");
    }
    render() {
        return (
            <div>
                <div className='box'>
                    <div className='box-form'>
                        <div className='box-login-title'>
                            <div className='i i-login'/>
                            <h2>LOGIN</h2>
                        </div>
                        <div className='box-login'>
                            <div className='fieldset-body' id='login_form'>
                                <button onClick={this.props.showLoginInfo} className='b b-form i i-more' title='More informations'/>
                                <p className='field'>
                                    <label htmlFor={'user'}>EMAIL</label>
                                    <input type='text' id='user' name='user' title='Username' />
                                    <span id='valida' className='i i-warning'/>
                                </p>
                                <p><input type='submit' id='do_login' value='RETRIEVE MY PASSWORD' title='Get Started'/></p>
                            </div>
                        </div>
                    </div>
                    <div className='box-info'>
                        <p>
                            <button onClick={this.props.hideLoginInfo} className='b b-info i i-left' title='Back to Sign In'/>
                            <span>Need Help?</span>
                        </p>
                        <div className='line-wh'/>
                        <Link to={`/register`}>
                            <button className='b-support btn btn-defaut' title='Create account'>Create account</button>
                        </Link>
                        <div className='line-wh'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

$(document).ready(function() {
    $("#do_login").click(function() {
        closeLoginInfo();
        $(this).parent().find('span').css("display","none");
        $(this).parent().find('span').removeClass("i-save");
        $(this).parent().find('span').removeClass("i-warning");
        $(this).parent().find('span').removeClass("i-close");

        var proceed = true;
        $("#login_form input").each(function(){

            if(!$.trim($(this).val())){
                $(this).parent().find('span').addClass("i-warning");
                $(this).parent().find('span').css("display","block");
                proceed = false;
            }
        });

        if(proceed)
        {
            $(this).parent().find('span').addClass("i-save");
            $(this).parent().find('span').css("display","block");
        }
    });

    //reset previously results and hide all message on .keyup()
    $("#login_form input").keyup(function() {
        $(this).parent().find('span').css("display","none");
    });

    setTimeout(closeLoginInfo, 1000);
});


function closeLoginInfo() {
    $(document).ready(function(){
        $('.b-form').css("opacity","1");
        $('.box-form').css("left","0px");
        $('.box-info').css("right","-5px");
    });
}

$(window).on('resize', function(){
    closeLoginInfo();
});