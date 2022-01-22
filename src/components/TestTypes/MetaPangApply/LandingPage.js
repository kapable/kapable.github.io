import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import ScriptTag from 'react-script-tag'
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import BG1 from '../../../api/MetaPang/Apply/MetaPangApply_01.png';
import BG2 from '../../../api/MetaPang/Apply/MetaPangApply_02.png';
import BG3 from '../../../api/MetaPang/Apply/MetaPangApply_03.png';
import BG4 from '../../../api/MetaPang/Apply/MetaPangApply_04.png';
import APPLYBTN from '../../../api/MetaPang/Apply/MetaPangApply_Btn.png';

function LandingPage(props) {
    const [mode, setMode] = useState('register');
    const [tok, setTok] = useState('');
    const BackgroundDiv = styled.div`
        background-color: white;
    `

    const ContentImg = styled.img`
        display: block;
        margin: 0 auto;
        max-width: 100%;
    `

    const CompanyName = styled.p`
        margin: 1.5rem auto;
        font-weight: bold;
        font-size: .8rem;
    `

    function adTagRenderer(){
        return(
            <Fragment>
                <div id="protag-in_article_video"></div>
                    <ScriptTag type="text/javascript">
                        {`window.googletag = window.googletag || { cmd: [] };
                        window.protag = window.protag || { cmd: [] };
                        window.protag.cmd.push(function () {
                            window.protag.display("protag-in_article_video");
                        });`}
                    </ScriptTag>
            </Fragment>
        )
    }

    function _eventSenderGA(category, action, label){
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    }

    const applyBtnHandler = () => {
        _eventSenderGA("Submitting", "Click Apply Button", "apply page")
        alert("축하합니다!\n카카오톡 플러스 친구 추가를\n완료하시면 응모가 완료됩니다!")
        props.history.push({
            pathname:`/metapangapply/completed/`,
            state: tok
        });
    }

    const formRenderer = (mode) => {
        if(mode === 'register') {
            return <RegisterPage setMode={setMode} />
        } else if (mode === 'login') {
            return <LoginPage setMode={setMode} setTok={setTok}/>
        } else if (mode === 'logined') {
            return <ContentImg src={APPLYBTN} alt="APPLYBTN" onClick={applyBtnHandler} style={{cursor: 'pointer'}}/>
        }
    }

    return <BackgroundDiv>
        <ContentImg src={BG1} alt="BG1" />
        <ContentImg src={BG2} alt="BG1" />
        <ContentImg src={BG3} alt="BG1" />
        <ContentImg src={BG4} alt="BG1" />
        <div>
            {formRenderer(mode)}
            {adTagRenderer()}
        </div>
        
        <CompanyName>©CookieRocket</CompanyName>
    </BackgroundDiv>;
}

export default withRouter(LandingPage);
