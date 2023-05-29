import React from 'react';
import './factPok.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import { BrowserRouter as Router, Link, withRouter } from 'react-router-dom';
import COPYBTN from '../../../api/DefaultImg/test-intro-copy-link-btn.png';
import BACKBTN from '../../../api/DefaultImg/test-intro-other-tests-btn.png';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

const FactPok = () => {
    const _eventSenderGA = (category, action, label) => {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
    };

    const _onShareButtonClick = () => {
        _eventSenderGA("Sharing", "Click Copy-link Button", "intro page");
        return alert("링크가 복사됐어요!");
    };

    return (
        <div>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>팩폭력 지수 테스트</title>
                <meta name="title" content="팩폭력 지수 테스트 - 케이테스트"/>
                <meta name="description" content="나와 친구의 팩폭력 지수 테스트하기 - 팩폭력 지수 테스트" data-react-helmet="true"/>
                <link rel="main-url" href="https://ktestone.com/kapable.github.io/factPok/"/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://ktestone.com/kapable.github.io/factPok/"/>
                <meta property="og:title" content="팩폭력 지수 테스트 - 케이테스트"/>
                <meta property="og:description" content="나와 친구의 팩폭력 지수 테스트하기 - 팩폭력 지수 테스트"/>
                <meta property="og:image" content="https://images.ktestone.com/main-thumbnail/factPok-thumb.png"/>
                <meta property="og:image:alt" content="팩폭력 지수 테스트 - 케이테스트" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://ktestone.com/kapable.github.io/factPok/"/>
                <meta property="twitter:title" content="팩폭력 지수 테스트 - 케이테스트"/>
                <meta property="twitter:description" content="나와 친구의 팩폭력 지수 테스트하기 - 팩폭력 지수 테스트"/>
                <meta property="twitter:image" content="https://images.ktestone.com/main-thumbnail/factPok-thumb.png"/>
                <meta property="twitter:image:alt" content="팩폭력 지수 테스트 - 케이테스트" />
            </Helmet>
            <Router basename='/kapable.github.io/' forceRefresh={true}>
                <div className='factPok-intor-images-container'>
                    <div className='factPok-intro-top'>
                        <img loading="lazy" className='factPok-intro-top-img' src="https://images.ktestone.com/introImages/factPok-intro-top.jpg" alt="factPok-top"/>
                    </div>
                    <Link to='/MyFactPok/'>
                        <img loading="lazy" className='factPok-intro-middle-left-img' src="https://images.ktestone.com/introImages/factPok-intro-middle-left.jpg" alt="MyfactPok"/>
                    </Link>
                    <Link to='/FriendFactPok/'>
                        <img loading="lazy" className='factPok-intro-middle-right-img' src="https://images.ktestone.com/introImages/factPok-intro-middle-right.jpg" alt="YourfactPok"/>
                    </Link>
                    <div className='factPok-intro-bottom'>
                        <img loading="lazy" className='factPok-intro-bottom-img' src="https://images.ktestone.com/introImages/factPok-intro-bottom.jpg" alt="factPok-bottom"/>
                    </div>
                </div>
            <div className="test-intro-with-friend">
                <CopyToClipboard text="https://ktestone.com/kapable.github.io/factPok/">
                    <img loading="lazy"
                        src={COPYBTN}
                        className="test-intro-with-friend-img"
                        onClick={_onShareButtonClick}
                        alt="테스트 링크 복사"/>
                </CopyToClipboard>
            </div>
            <Link to='/'>
                <div className="test-intro-to-main">
                    <img loading="lazy"
                        className="test-intro-to-main-img"
                        src={BACKBTN}
                        alt="다른 테스트 하러 뒤로가기"/>
                </div>
            </Link>
            </Router>
        </div>
    );
};

export default withRouter(FactPok);