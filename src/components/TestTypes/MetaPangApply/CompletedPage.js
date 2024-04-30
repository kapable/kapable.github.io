import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { _eventSenderGA } from '../../../tools/tools';
import styled from 'styled-components';

function CompletedPage(props) {
    const plusFriendLick = 'http://pf.kakao.com/_IxnRfb';
    // eslint-disable-next-line
    const [isLogin, setIsLogin] = useState(props.location.state === localStorage.getItem("access_token"));

    useEffect(() => {
        console.log(props.location.state);
        if(isLogin === false) {
            alert("로그인 후 응모할 수 있습니다!")
            props.history.push({
                pathname:`/metapangapply/`,
            })
        }
    }, [isLogin, props]);

    const ContentImg = styled.img`
        display: block;
        margin: 0 auto;
        max-width: 100%;
    `

    return (
        <div>
            <ContentImg src={`https://images.ktestone.com/MetaPang/Apply/MetaPangApplyCompleted_01.png`} alt="BG1" />
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={plusFriendLick}
                onClick={() => {_eventSenderGA("Submitting", "Click KakaoPlusFriend Button", "apply completed page")}}
            >
                <ContentImg src={`https://images.ktestone.com/MetaPang/Apply/MetaPangApplyCompleted_02.png`} alt="BG2" className="metapang-apply-complete-kakao-plusfriend-banner"/>
            </a>
            <ContentImg src={`https://images.ktestone.com/MetaPang/Apply/MetaPangApplyCompleted_03.png`} alt="BG3" />
            {/* {AdplusAdvertiser()} */}
        </div>
    );
}

export default withRouter(CompletedPage);
