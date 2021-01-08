import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';

function Login() {
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg' alt='slack logo' />
                <h1>Sign in to: Suck at Coding with Me</h1>
                <p>suckatcoding.slack.com</p>
                <Button>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
