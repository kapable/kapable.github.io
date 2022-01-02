import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import UPBAR from '../../../../api/PostImg/Background/up_bg_bar.png';
import DOWNBAR from '../../../../api/PostImg/Background/down_bg_bar.png';
import '../Post2021.css';

function AuthPage(props) {
    const [mode, setMode] = useState('register');

    useEffect(() => {

    }, [props])
    

    if (mode === 'register') {
        return (
            <>
                <img src={UPBAR} alt="UPBAR" className="start-page-upbar"/>
                <RegisterPage setMode={setMode}/>
                <img src={DOWNBAR} alt="DOWNBAR" className="start-page-downbar"/>
            </>
            
        )
    } else if (mode === 'login') {
        return (
            <>
                <img src={UPBAR} alt="UPBAR" className="start-page-upbar"/>
                <LoginPage setMode={setMode}/>
                <img src={DOWNBAR} alt="DOWNBAR" className="start-page-downbar"/>
            </>
        )
    }
    
}

export default withRouter(AuthPage);
