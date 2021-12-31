import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

function AuthPage(props) {
    const [mode, setMode] = useState('register');

    useEffect(() => {

    }, [props])
    

    if (mode === 'register') {
        return (
            <RegisterPage setMode={setMode}/>
        )
    } else if (mode === 'login') {
        return (
            <LoginPage setMode={setMode}/>
        )
    }
    
}

export default withRouter(AuthPage);
