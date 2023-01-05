import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import COPYBTN from '../../api/DefaultImg/test-intro-copy-link-btn.png';
import BACKBTN from '../../api/DefaultImg/test-intro-other-tests-btn.png';

const FortuneCookie = () => {
    return (
        <div>
            <Link to='/fortuneCookie/' className="main-link-block" key="fortuneCookie-banner">
                <img className="intro-main-img" src={`https://images.ktestone.com/introImages/fortuneCookie-intro.png`} alt="FORTUNE-COOKIE" />
            </Link>
            <p><b>*(추천) 사파리, 크롬 네이버 브라우저에서<br />조금 더 쾌적하게 이용 가능합니다!</b></p>
            
            <div className="test-intro-with-friend">
                <CopyToClipboard
                    // text={this.state.quiz_url+'/'}
                    >
                    <img
                        src={COPYBTN}
                        className="test-intro-with-friend-img"
                        // onClick={this._onShareButtonClick}
                        alt="테스트 링크 복사"/>
                </CopyToClipboard>
            </div>
            <div className="test-intro-to-main">
                <img
                    className="test-intro-to-main-img"
                    src={BACKBTN}
                    // onClick={this._onMainButtonClick}
                    alt="다른 테스트 하러 뒤로가기"/>
            </div>
        </div>
    );
};

export default FortuneCookie;