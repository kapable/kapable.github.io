import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import ScriptTag from 'react-script-tag'
import { Helmet } from 'react-helmet';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

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

    const metaTagRenderer = () => {
        let _PostMetaTag = <Helmet>
                        {/* <!-- Primary Meta Tags --> */}
                        <title>메타팡 응모하기</title>
                        <meta name="title" content="메타팡 응모하기 - 케이테스트"/>
                        <meta name="description" content="메타버스 놀이터 메타팡" data-react-helmet="true"/>
                        <link rel="main-url" href="https://ktestone.com/kapable.github.io/metapangapply/"/>

                        {/* <!-- Open Graph / Facebook --> */}
                        <meta property="og:type" content="website"/>
                        <meta property="og:url" content="https://ktestone.com/kapable.github.io/metapangapply/"/>
                        <meta property="og:title" content="메타팡 응모하기 - 케이테스트"/>
                        <meta property="og:description" content="메타버스 놀이터 메타팡"/>
                        <meta property="og:image" content={`https://images.ktestone.com/MetaPang/Apply/MetaPangMetatagImg.png`}/>
                        <meta property="og:image:alt" content="메타팡 응모하기 - 케이테스트" />

                        {/* <!-- Twitter --> */}
                        <meta property="twitter:card" content="summary_large_image"/>
                        <meta property="twitter:url" content="https://ktestone.com/kapable.github.io/metapangapply/"/>
                        <meta property="twitter:title" content="메타팡 응모하기 - 케이테스트"/>
                        <meta property="twitter:description" content="메타버스 놀이터 메타팡"/>
                        <meta property="twitter:image" content={`https://images.ktestone.com/MetaPang/Apply/MetaPangMetatagImg.png`}/>
                        <meta property="twitter:image:alt" content="메타팡 응모하기 - 케이테스트" />
                    </Helmet>
        return _PostMetaTag
    }

    const formRenderer = (mode) => {
        if(mode === 'register') {
            return <RegisterPage setMode={setMode} />
        } else if (mode === 'login') {
            return <LoginPage setMode={setMode} setTok={setTok}/>
        } else if (mode === 'logined') {
            return <ContentImg src={`https://images.ktestone.com/MetaPang/Apply/MetaPangApply_Btn.png`} alt="APPLYBTN" onClick={applyBtnHandler} style={{cursor: 'pointer'}}/>
        }
    }

    return (
        <BackgroundDiv>
            {metaTagRenderer()}
            <ContentImg src={`https://images.ktestone.com/MetaPang/Apply/MetaPangApply_01.png`} alt="BG1" />
            <ContentImg src={`https://images.ktestone.com/MetaPang/Apply/MetaPangApply_02.png`} alt="BG1" />
            <ContentImg src={`https://images.ktestone.com/MetaPang/Apply/MetaPangApply_03.png`} alt="BG1" />
            <ContentImg src={`https://images.ktestone.com/MetaPang/Apply/MetaPangApply_04.png`} alt="BG1" />
            <div>
                {formRenderer(mode)}
                {adTagRenderer()}
            </div>
            <CompanyName>©CookieRocket</CompanyName>
        </BackgroundDiv>
    );
}

export default withRouter(LandingPage);
