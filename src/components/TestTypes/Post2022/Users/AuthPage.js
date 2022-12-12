import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

const AuthPage = () => {
    const [mode, setMode] = useState('login');

    if(mode === "register") {
        return (
            <RegisterPage setMode={setMode}/>
        );
    } else if(mode === "login") {
        return (
            <LoginPage setMode={setMode}/>
        );
    };
};

export default withRouter(AuthPage);