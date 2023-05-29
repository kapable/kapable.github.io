import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

function AuthPage(props) {
    const [mode, setMode] = useState('register');
    const [lang, setLang] = useState('');

    useEffect(() => {
        if(props.location.state === undefined) {
            setLang(props.language);
        } else {
            setLang(props.location.state.language);
        }
    }, [props])

    if (mode === 'register') {
        return (
            <>  
                {lang === `Eng`
                ? <img loading="lazy" src={"https://images.ktestone.com/PostImg/English/Button/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                : <img loading="lazy" src={"https://images.ktestone.com/PostImg/Background/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                }
                <RegisterPage setMode={setMode} language={lang}/>
                <img loading="lazy" src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
            </>
            
        )
    } else if (mode === 'login') {
        return (
            <>
                {lang === `Eng`
                ? <img loading="lazy" src={"https://images.ktestone.com/PostImg/English/Button/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                : <img loading="lazy" src={"https://images.ktestone.com/PostImg/Background/up_bg_bar.png"} alt="UPBAR" className="start-page-upbar"/>
                }
                <LoginPage setMode={setMode} language={lang}/>
                <img loading="lazy" src={"https://images.ktestone.com/PostImg/Background/down_bg_bar.png"} alt="DOWNBAR" className="start-page-downbar"/>
            </>
        )
    }
    
}

export default withRouter(AuthPage);
