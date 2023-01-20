import React, { Fragment } from 'react';
import './loveCharacter.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import { BrowserRouter as Router, Link, withRouter } from 'react-router-dom';
import COPYBTN from '../../../api/DefaultImg/test-intro-copy-link-btn.png';
import BACKBTN from '../../../api/DefaultImg/test-intro-other-tests-btn.png';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import OtherLangIcons from '../../SubComponents/OtherLangIcons';

const LoveCharacter = ({lang}) => {
    const _eventSenderGA = (category, action, label) => {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    };

    const _onShareButtonClick = () => {
        const alertMsg = lang === 'Kor' ? '"링크가 복사됐어요!"' : 'the link copied!'
        _eventSenderGA("Sharing", "Click Copy-link Button", "intro page");
        return alert(alertMsg);
    };

    return (
        <div>
            {lang === 'Kor'
                ? (
                    <Helmet>
                        {/* <!-- Primary Meta Tags --> */}
                        <title>연애 캐릭터 테스트</title>
                        <meta name="title" content="연애 캐릭터 테스트 - 케이테스트"/>
                        <meta name="description" content="남친 & 여친 연애 캐릭터 테스트하기 - 연애 캐릭터 테스트 | 연애 테스트 | 연애캐릭터 테스트 남자편 여자편" data-react-helmet="true"/>
                        <link rel="main-url" href="https://ktestone.com/kapable.github.io/loveCharacter/"/>

                        {/* <!-- Open Graph / Facebook --> */}
                        <meta property="og:type" content="website"/>
                        <meta property="og:url" content="https://ktestone.com/kapable.github.io/loveCharacter/"/>
                        <meta property="og:title" content="연애 캐릭터 테스트 - 케이테스트"/>
                        <meta property="og:description" content="남친 & 여친 연애 캐릭터 테스트하기 - 연애 캐릭터 테스트 | 연애 테스트 | 연애캐릭터 테스트 남자편 여자편"/>
                        <meta property="og:image" content={`https://images.ktestone.com/main-thumbnail/loveCharacter-thumb.png`}/>
                        <meta property="og:image:alt" content="연애 캐릭터 테스트 - 케이테스트" />

                        {/* <!-- Twitter --> */}
                        <meta property="twitter:card" content="summary_large_image"/>
                        <meta property="twitter:url" content="https://ktestone.com/kapable.github.io/loveCharacter/"/>
                        <meta property="twitter:title" content="연애 캐릭터 테스트 - 케이테스트"/>
                        <meta property="twitter:description" content="남친 & 여친 연애 캐릭터 테스트하기 - 연애 캐릭터 테스트 | 연애 테스트 | 연애캐릭터 테스트 남자편 여자편"/>
                        <meta property="twitter:image" content={`https://images.ktestone.com/main-thumbnail/loveCharacter-thumb.png`}/>
                        <meta property="twitter:image:alt" content="연애 캐릭터 테스트 - 케이테스트" />
                    </Helmet>
                )
                : (
                    <Helmet>
                        {/* <!-- Primary Meta Tags --> */}
                        <title>Love Charactet Test</title>
                        <meta name="title" content="Love Charactet Test - KTEST"/>
                        <meta name="description" content="Boyfriend & Girlfriend Love Charactet Test - Love Charactet Test | Love Test | Love character test male female" data-react-helmet="true"/>
                        <link rel="main-url" href="https://ktestone.com/kapable.github.io/loveCharacter/"/>

                        {/* <!-- Open Graph / Facebook --> */}
                        <meta property="og:type" content="website"/>
                        <meta property="og:url" content="https://ktestone.com/kapable.github.io/loveCharacter/"/>
                        <meta property="og:title" content="Love Charactet Test - KTEST"/>
                        <meta property="og:description" content="Boyfriend & Girlfriend Love Charactet Test - Love Charactet Test | Love Test | Love character test male female"/>
                        <meta property="og:image" content={`https://images.ktestone.com/main-thumbnail/loveCharacterEng-thumb.png`}/>
                        <meta property="og:image:alt" content="Love Charactet Test - KTEST" />

                        {/* <!-- Twitter --> */}
                        <meta property="twitter:card" content="summary_large_image"/>
                        <meta property="twitter:url" content="https://ktestone.com/kapable.github.io/loveCharacter/"/>
                        <meta property="twitter:title" content="Love Charactet Test - KTEST"/>
                        <meta property="twitter:description" content="Boyfriend & Girlfriend Love Charactet Test - Love Charactet Test | Love Test | Love character test male female"/>
                        <meta property="twitter:image" content={`https://images.ktestone.com/main-thumbnail/loveCharacterEng-thumb.png`}/>
                        <meta property="twitter:image:alt" content="Love Charactet Test - KTEST" />
                    </Helmet>
                )
            }
            <Router basename='/kapable.github.io/' forceRefresh={true}>
                <div className='loveCharacter-intro-images-container'>
                    <Link to={`/loveCharacterFemale${lang === 'Kor' ? '' : 'Eng'}/`}>
                        <img className='loveCharacter-intro-left-img' src={`https://images.ktestone.com/introImages/loveCharacter${lang === 'Kor' ? '' : 'Eng'}-intro-left.jpg`} alt="loveCharacterFemale"/>
                    </Link>
                    <Link to={`/loveCharacterMale${lang === 'Kor' ? '' : 'Eng'}/`}>
                        <img className='loveCharacter-intro-right-img' src={`https://images.ktestone.com/introImages/loveCharacter${lang === 'Kor' ? '' : 'Eng'}-intro-right.jpg`} alt="loveCharacterMale"/>
                    </Link>
                </div>
            <OtherLangIcons currentTest={lang === 'Kor' ? "loveCharacter" : "loveCharacterEng"}/>
            <div className="test-intro-with-friend">
                <CopyToClipboard text={`https://ktestone.com/kapable.github.io/loveCharacter${lang === 'Kor' ? '' : 'Eng'}/`}>
                    <img
                        src={COPYBTN}
                        className="test-intro-with-friend-img"
                        onClick={_onShareButtonClick}
                        alt="테스트 링크 복사"/>
                </CopyToClipboard>
            </div>
            <Link to='/'>
                <div className="test-intro-to-main">
                    <img
                        className="test-intro-to-main-img"
                        src={BACKBTN}
                        alt="다른 테스트 하러 뒤로가기"/>
                </div>
            </Link>
            </Router>
        </div>
    );
};

export default withRouter(LoveCharacter);