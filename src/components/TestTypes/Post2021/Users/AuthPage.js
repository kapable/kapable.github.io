import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

function AuthPage() {
    const [mode, setMode] = useState('register');
    

    if (mode === 'register') {
        return (
            <>
                <img src={"https://images.ktestone.com/PostImg/Background/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                <RegisterPage setMode={setMode}/>
                <img src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
            </>
            
        )
    } else if (mode === 'login') {
        return (
            <>
                <img src={"https://images.ktestone.com/PostImg/Background/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                <LoginPage setMode={setMode}/>
                <img src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
            </>
        )
    }
    
}

export default withRouter(AuthPage);
